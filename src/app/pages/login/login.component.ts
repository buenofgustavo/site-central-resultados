import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth/authservice.service';
import { credenciais } from 'src/app/models/credenciais/credenciais';
import { NbToastrService } from '@nebular/theme';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, Validators.email),
    senha: new FormControl(null, Validators.minLength(3)),
  });

  creds: credenciais = {
    email: '',
    senha: ''
  }
  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: AuthService,
    private router: Router,
    private toastr: NbToastrService) { }

  ngOnInit(): void {
    this.clearLocalStorage();
  }
  logar() {
    const email = this.loginForm.get('email')?.value ?? '';
    const senha = this.loginForm.get('senha')?.value ?? '';

    if (!email || !senha) {
      this.toastr.danger('Por favor, preencha todos os campos.', 'Erro no login');
      return;  // Evitar a execução do código seguinte se as credenciais estiverem vazias
    }

    this.service.authenticate({ email, senha }).subscribe(
      resposta => {
        const authorizationHeader = resposta.body;
        if (authorizationHeader) {
          const token = authorizationHeader.substring(7);
          this.service.sucessfulLogin(token);

          // Exibir toastr de sucesso antes de redirecionar
          this.toastr.success('Usuário logado com sucesso!', 'Login');
          console.log('Redirecionando para a página home.');

          // Adicionando um pequeno atraso antes de redirecionar (opcional)
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 500); // Ajuste o valor conforme necessário
        } else {
          this.toastr.danger('Token de autorização não encontrado na resposta.', 'Erro no login');
          console.error('Token de autorização não encontrado na resposta.');
        }
      },
      error => {
        this.toastr.danger('Falha ao fazer login. Verifique suas credenciais.', 'Erro no login');
        console.error('Erro ao fazer login:', error);
      }
    );
  }
  clearLocalStorage(): void {
    localStorage.clear();
  }
}
