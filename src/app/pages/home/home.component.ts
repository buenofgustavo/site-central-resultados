import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  updates: any[] = [

    {
      date: '06/02/2024',
      description: 'Mudança de cores dos gráficos do Dash Performance'
    },
    {
      date: '06/02/2024',
      description: 'Correção de bugs Dash Performance'
    },
    {
      date: '06/02/2024',
      description: 'Path de atualizações adcionado'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
