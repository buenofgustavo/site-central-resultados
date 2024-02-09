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
        { title: 'Dashboard Performance', link: '/dash-performance', hidden: !this.authService.hasPermission(['ROLE_ADMIN','ROLE_PERFORMACE']) },
        { title: 'Dashboard Devolução', link: '/dash-avarias', hidden: !this.authService.hasPermission(['ROLE_ADMIN']) },
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
