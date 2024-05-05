import { Injectable, inject } from '@angular/core';
import { environments } from '../../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Pacientes } from '../interfaces/pacientes.interface';

@Injectable({
  providedIn: 'root',
})
export class PacientesService {
  url = environments.apiUrl;
  private http = inject(HttpClient);

  getPacientes() {
    const url = `${this.url}/pacientes/listar`;
    return this.http.get<Pacientes>(url);
  }
}
