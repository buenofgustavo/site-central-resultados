import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { usuario } from 'src/app/models/usuarios/usuariomodel';
import { UsuarioService } from 'src/app/services/usuarios/usuarios.service';

interface Perfis {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {

  selectedPerfil: number | null = null;
  perfis: Perfis[] = [
    { value: 0, viewValue: 'Administrador' },
    { value: 1, viewValue: 'Dash Performance' },
    { value: 2, viewValue: 'Diaria PJ' },
    { value: 3, viewValue: 'Dash Jurídico' },
    { value: 4, viewValue: 'Dash Contas a Receber' },
    { value: 5, viewValue: 'Dash Emissão de Docs' },
    { value: 6, viewValue: 'Dash Ocorrências' },
    { value: 7, viewValue: 'Dash Logística' },
  ];

  constructor(
    private service: UsuarioService,
    private toastr: NbToastrService,
    private router: Router,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef

  ) { }

  user: usuario = {
    id:'',
    name: '',
    email: '',
    senha: '',
    perfis: []
  };

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  create(): void {
    this.service.create(this.user).subscribe(
      () => {
        this.toastr.success('Usuário Cadastrado com Sucesso!', 'Cadastro');
        this.clearFields();
      },
      (ex) => {
        console.log(ex);
        if (ex.status === 403) {
          this.toastr.danger('Por favor, preencha todos os campos.', 'Erro no Cadastro');
        } else {
          this.toastr.danger('Erro durante o cadastro. Tente novamente mais tarde.');
        }
      }
    );
  }

  update(): void {
    this.service.update(this.user).subscribe(
      () => {
        this.toastr.success('Usuário Atualizado com Sucesso!', 'Atualização');
        this.clearFields();
      },
      (ex) => {
        console.log(ex);
        // Lógica de tratamento de erro, se necessário
      }
    );
  }

  delete(): void {
    this.service.delete(this.user.id).subscribe(
      () => {
        this.toastr.success('Usuário Deletado com Sucesso!', 'Exclusão');
        this.clearFields();
      },
      (ex) => {
        console.log(ex);
        // Lógica de tratamento de erro, se necessário
      }
    );
  }
  findByEmail(): void {
    const email = this.user.email;

    if (email) {
      this.service.findByEmail(email).subscribe(
        (foundUser) => {
          console
          this.user = foundUser;
          this.toastr.success('Usuário encontrado com sucesso!', 'Consulta');
        },
        (ex) => {
          console.log(ex);
          // Handle error (e.g., user not found)
          this.toastr.warning('Usuário não encontrado.', 'Consulta');
        }
      );
    } else {
      this.toastr.warning('Por favor, preencha o e-mail antes de consultar.', 'Consulta');
    }
  }
  private clearFields(): void {
    // Reset user object
    this.user = {
      id: '',
      name: '',
      email: '',
      senha: '',
      perfis: []
    };

    // Reset form controls
    this.nome.reset();
    this.email.reset();
    this.senha.reset();
    this.selectedPerfil = null;

    // Trigger change detection to update the view
    this.cdr.detectChanges();
  }


}
