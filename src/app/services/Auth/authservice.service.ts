import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_CONFIG } from '../../config/api.config';
import { HttpClient } from '@angular/common/http';
import { credenciais } from '../../models/credenciais/credenciais';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtservice: JwtHelperService = new JwtHelperService();
  private usuarioSubject = new BehaviorSubject<{ nome: string | null, perfis: string[] | null }>({ nome: null, perfis: null });

  constructor(private http: HttpClient) { }

  authenticate(creds: credenciais) {
    return this.http.post(`${API_CONFIG.baseUrl}/auth/login`, creds, {
      observe: 'response',
      responseType: 'text'
    });
  }

  sucessfulLogin(authToken: string) {
    localStorage.setItem('token', authToken);
    this.updateUserData();
  }

  isAuthenticated() {
    let token = localStorage.getItem('token');
    if (token != null) {
      return !this.jwtservice.isTokenExpired(token);
    }
    return false;
  }

  logout() {
    localStorage.clear();
    this.updateUserData();
    console.log('Logout realizado.');
  }

  getUsuarioLogado(): string | null {
    const token = localStorage.getItem('token');
    return token ? this.jwtservice.decodeToken(token)?.sub : null;
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsuarioObservable() {
    return this.usuarioSubject.asObservable();
  }

  private updateUserData() {
    const token = localStorage.getItem('token');
    const decodedToken = token ? this.jwtservice.decodeToken(token) : null;

    const nome = decodedToken ? decodedToken.name : null;
    const perfis = decodedToken ? decodedToken.profiles : null;

    this.usuarioSubject.next({ nome, perfis });


  }

  // AuthService

hasPermission(allowedProfiles: string[]): boolean {
  const token = localStorage.getItem('token');
  const decodedToken = token ? this.jwtservice.decodeToken(token) : null;
  const perfis  = decodedToken ? decodedToken.profiles : [];

  return allowedProfiles.some(profile => perfis.includes(profile));
}

}
