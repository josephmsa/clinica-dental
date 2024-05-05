import { Injectable, inject } from '@angular/core';
import { environments } from '../../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Horarios } from '../interfaces/horario.interface';

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  url = environments.apiUrl;
  private http = inject(HttpClient);

  getHorario() {
    const url = `${this.url}/horarioempleado/listar`;
    return this.http.get<Horarios>(url);
  }
}
