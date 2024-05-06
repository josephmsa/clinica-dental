import { Injectable, inject } from '@angular/core';
import { environments } from '../../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { AddCites, Cites, DetailCite } from '../interfaces/cites.interface';

@Injectable({
  providedIn: 'root',
})
export class CitesService {
  url = environments.apiUrl;
  private http = inject(HttpClient);

  getCites() {
    const url = `${this.url}/citas/listar`;
    return this.http.get<Cites>(url);
  }

  getDetailCites(id: number) {
    const url = `${this.url}/citas/obtener?id=${id}`;
    return this.http.get<DetailCite>(url);
  }

  addCites(cite: AddCites) {
    const url = `${this.url}/citas/insertar`;
    return this.http.post(url, cite);
  }
  deleteCites(id: number) {
    const url = `${this.url}/citas/eliminar?id=${id}`;
    return this.http.delete(url);
  }
}
