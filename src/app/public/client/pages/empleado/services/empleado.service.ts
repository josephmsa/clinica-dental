import { Injectable, inject } from '@angular/core';
import { environments } from '../../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../interfaces/empleados.interface';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  url = environments.apiUrl;
  private http = inject(HttpClient);

  getEmpleado() {
    const url = `${this.url}/empleado/listar`;
    return this.http.get<Empleados>(url);
  }
}
