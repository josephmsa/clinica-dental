import { Injectable, inject } from '@angular/core';
import { environments } from '../../../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Cites, DetailCite } from '../interfaces/cites.interface';

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
}
