import { Injectable, inject } from '@angular/core';
import { environments } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Cites } from '../interfaces/cites.interface';

@Injectable({
  providedIn: 'root'
})
export class CitesService {
  url = environments.apiUrl;
  private http = inject(HttpClient);

  getCites() {
    const url = `${this.url}/citas/listar`;
    return this.http.get<Cites>(url);
  }
}
