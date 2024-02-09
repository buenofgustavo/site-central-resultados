import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';

import { JwtHelperService } from '@auth0/angular-jwt'; // Importe o serviço JwtHelperService
import { usuario } from 'src/app/models/usuarios/usuariomodel';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient ) { }

  private extractAuthToken(fullToken: string): string {
    const startIndex = fullToken.indexOf('"token":"') + 9;
    const endIndex = fullToken.indexOf('"', startIndex);
    return fullToken.substring(startIndex, endIndex);
  }


  findById(id: any): Observable<usuario> {
    const fullToken = localStorage.getItem('token');

    // Verifique se o token existe antes de tentar usá-lo
    if (fullToken) {
      // Extrair o token de autenticação da string do token completo
      const authToken = this.extractAuthToken(fullToken);

      // Configurar o cabeçalho com o token de autenticação
      const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);

      // Enviar a requisição GET com o cabeçalho configurado
      return this.http.get<usuario>(`${API_CONFIG.baseUrl}/usuarios/${id}`, { headers });
    } else {
      // Lógica para lidar com o caso em que o token não está disponível
      console.error('Token de autenticação não encontrado.');
      return throwError('Token de autenticação não encontrado.');
    }
  }


  findAll(): Observable<usuario[]>{
    return this.http.get<usuario[]>(`${API_CONFIG.baseUrl}/usuarios`);
  }
  create(usuario: usuario): Observable<usuario> {
    const fullToken = localStorage.getItem('token');

    // Verifique se o token existe antes de tentar usá-lo
    if (fullToken) {
      // Encontrar a posição inicial do token de autenticação na string
      const startIndex = fullToken.indexOf('"token":"') + 9;

      // Encontrar a posição final do token de autenticação na string
      const endIndex = fullToken.indexOf('"', startIndex);

      // Extrair a substring contendo o token de autenticação
      const authToken = fullToken.substring(startIndex, endIndex);

      const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
      return this.http.post<usuario>(`${API_CONFIG.baseUrl}/usuarios`, usuario, { headers });
    } else {
      // Lógica para lidar com o caso em que o token não está disponível
      console.error('Token de autenticação não encontrado.');
      return throwError('Token de autenticação não encontrado.');
    }
  }



  update(usuario: usuario): Observable<usuario>{
    const fullToken = localStorage.getItem('token');

    // Verifique se o token existe antes de tentar usá-lo
    if (fullToken) {
      // Extrair o token de autenticação da string do token completo
      const authToken = this.extractAuthToken(fullToken);

      // Configurar o cabeçalho com o token de autenticação
      const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);

      // Enviar a requisição PUT com o cabeçalho configurado
      return this.http.put<usuario>(`${API_CONFIG.baseUrl}/usuarios`, usuario, { headers });
    } else {
      // Lógica para lidar com o caso em que o token não está disponível
      console.error('Token de autenticação não encontrado.');
      return throwError('Token de autenticação não encontrado.');
    }
  }

  delete(id: any): Observable<usuario>{
    const fullToken = localStorage.getItem('token');

    // Verifique se o token existe antes de tentar usá-lo
    if (fullToken) {
      // Extrair o token de autenticação da string do token completo
      const authToken = this.extractAuthToken(fullToken);

      // Configurar o cabeçalho com o token de autenticação
      const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);

      // Enviar a requisição DELETE com o cabeçalho configurado
      return this.http.delete<usuario>(`${API_CONFIG.baseUrl}/usuarios/${id}`, { headers });
    } else {
      // Lógica para lidar com o caso em que o token não está disponível
      console.error('Token de autenticação não encontrado.');
      return throwError('Token de autenticação não encontrado.');
    }
  }

  findByEmail(email: string): Observable<usuario> {
    const fullToken = localStorage.getItem('token');

    // Verifique se o token existe antes de tentar usá-lo
    if (fullToken) {
      // Extrair o token de autenticação da string do token completo
      const authToken = this.extractAuthToken(fullToken);

      // Configurar o cabeçalho com o token de autenticação
      const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);

      // Enviar a requisição GET com o cabeçalho configurado
      return this.http.get<usuario>(`${API_CONFIG.baseUrl}/usuarios/${email}`, { headers });
    } else {
      // Lógica para lidar com o caso em que o token não está disponível
      console.error('Token de autenticação não encontrado.');
      return throwError('Token de autenticação não encontrado.');
    }
  }
}
