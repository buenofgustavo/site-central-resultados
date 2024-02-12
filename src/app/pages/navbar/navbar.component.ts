// NavbarComponent

import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from 'src/app/services/Auth/authservice.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: NbMenuItem[] = [
    // ... outros itens do menu
    {
      title: 'Página Inicial',
      icon: 'home-outline',
      link: '/home',
    },
    {
      title: 'Dashboards',
      icon: 'eye-outline',
      children: [
        { title: 'Performance', link: '/dash-performance', hidden: !this.authService.hasPermission(['ROLE_ADMIN','ROLE_PERFORMACE']) },
        { title: 'Jurídico', link: '/dash-juridico', hidden: !this.authService.hasPermission(['ROLE_ADMIN']) },
        { title: 'Contas a receber', link: '/dash-contas-a-receber', hidden: !this.authService.hasPermission(['ROLE_ADMIN']) },
        { title: 'Emissão de Docs', link: '/dash-emissao-docs', hidden: !this.authService.hasPermission(['ROLE_ADMIN']) },
        { title: 'Ocorrências', link: '/dash-ocorrencias', hidden: !this.authService.hasPermission(['ROLE_ADMIN']) },
        { title: 'Logística', link: '/dash-logistica', hidden: !this.authService.hasPermission(['ROLE_ADMIN']) },
        { title: 'Contas a Pagar', link: '/dash-contas-a-pagar', hidden: !this.authService.hasPermission(['ROLE_ADMIN']) },
        { title: 'GR', link: '/dash-gr', hidden: !this.authService.hasPermission(['ROLE_ADMIN']) },
      ],
    },
    {
      title: 'Diárias PJ',
      icon: 'calendar-outline',
      link: '/diaria-pj',
      hidden: !this.authService.hasPermission(['ROLE_ADMIN','ROLE_DIARIA_PJ']),
    },
    {
      title: 'Cadastro Usuário',
      icon: 'person-add-outline',
      link: '/cadastro-usuario',
      hidden: !this.authService.hasPermission(['ROLE_ADMIN']),
    },
    {
      title: 'Sair',
      icon: 'log-out-outline',
      link: '/login',
    },
  ];

  constructor(private authService: AuthService) {}
}
