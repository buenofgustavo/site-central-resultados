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
import { DashPerformanceComponent } from './pages/dash-performance/dash-performance.component';
import { DiariaPjComponent } from './pages/diaria-pj/diaria-pj.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';





@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashPerformanceComponent,
    DiariaPjComponent,
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
