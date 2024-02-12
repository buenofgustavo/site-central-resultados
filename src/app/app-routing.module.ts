import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashPerformanceComponent } from './pages/dashboards/dash-performance/dash-performance.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { DiariaPjComponent } from './pages/diaria-pj/diaria-pj.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashJuridicoComponent } from './pages/dashboards/dash-juridico/dash-juridico.component';
import { DashContasAReceberComponent } from './pages/dashboards/dash-contas-a-receber/dash-contas-a-receber.component';
import { DashEmissaoDocsComponent } from './pages/dashboards/dash-emissao-docs/dash-emissao-docs.component';
import { DashOcorrenciasComponent } from './pages/dashboards/dash-ocorrencias/dash-ocorrencias.component';
import { DashLogisticaComponent } from './pages/dashboards/dash-logistica/dash-logistica.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent, // Display LoginComponent first
    },
  {path: 'login', component: LoginComponent},

       {
         path: '', component: NavbarComponent,
         canActivate:[AuthGuard],
         children: [
        { path: 'home', component: HomeComponent },
        { path: 'dash-performance', component: DashPerformanceComponent },
        { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
        { path: 'diaria-pj', component: DiariaPjComponent },
        { path: 'dash-juridico', component: DashJuridicoComponent },
        { path: 'dash-contas-a-receber', component: DashContasAReceberComponent },
        { path: 'dash-emissao-docs', component: DashEmissaoDocsComponent },
        { path: 'dash-ocorrencias', component: DashOcorrenciasComponent },
        { path: 'dash-logistica', component: DashLogisticaComponent },
      ]}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
