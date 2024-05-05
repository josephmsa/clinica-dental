import { Injectable, inject } from '@angular/core';
import { environments } from '../../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  url = environments.apiUrl;
  private http = inject(HttpClient);

  getUsuarios() {
    const url = `${this.url}/usuario/listar`;
    return this.http.get<Usuarios>(url);
  }
}
