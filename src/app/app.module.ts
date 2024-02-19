import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { NbToastrModule, NbToastrService } from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbMenuModule,
  NbSelectModule,
  NbSidebarModule,
  NbStepperModule,
  NbThemeModule,
} from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { DashPerformanceComponent } from './pages/dashboards/dash-performance/dash-performance.component';
import { DiariaPjComponent } from './pages/diaria-pj/diaria-pj.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { DashJuridicoComponent } from './pages/dashboards/dash-juridico/dash-juridico.component';
import { DashContasAReceberComponent } from './pages/dashboards/dash-contas-a-receber/dash-contas-a-receber.component';
import { DashEmissaoDocsComponent } from './pages/dashboards/dash-emissao-docs/dash-emissao-docs.component';
import { DashOcorrenciasComponent } from './pages/dashboards/dash-ocorrencias/dash-ocorrencias.component';
import { DashLogisticaComponent } from './pages/dashboards/dash-logistica/dash-logistica.component';
import { DashContasAPagarComponent } from './pages/dashboards/dash-contas-a-pagar/dash-contas-a-pagar.component';
import { DashGrComponent } from './pages/dashboards/dash-gr/dash-gr.component';
import { DashComparacaoFaturamentoComponent } from './pages/dashboards/dash-comparacao-faturamento/dash-comparacao-faturamento.component';






@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashPerformanceComponent,
    DiariaPjComponent,
    DashJuridicoComponent,
    DashContasAReceberComponent,
    DashEmissaoDocsComponent,
    DashOcorrenciasComponent,
    DashLogisticaComponent,
    DashContasAPagarComponent,
    DashGrComponent,
    DashComparacaoFaturamentoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),NbMenuModule.forRoot(),HttpClientModule,
    NbLayoutModule, NbButtonModule, BrowserAnimationsModule,NbStepperModule,NbToastrModule.forRoot(),
    NbEvaIconsModule, NbCardModule,JwtModule,ReactiveFormsModule,
    FormsModule,NbInputModule,NbSelectModule, NbFormFieldModule, NbIconModule, NbThemeModule.forRoot({ name: 'default' })
  ],
  providers: [    NbToastrService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
