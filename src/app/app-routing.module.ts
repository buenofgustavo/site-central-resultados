import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashPerformanceComponent } from './pages/dash-performance/dash-performance.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { DiariaPjComponent } from './pages/diaria-pj/diaria-pj.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DahsAvariasComponent } from './pages/dashboards/dahs-avarias/dahs-avarias.component';

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
        { path: 'dash-avarias', component: DahsAvariasComponent },
      ]}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
