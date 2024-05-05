import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { Usuario } from './interfaces/usuarios.interface';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css',
})
export class UsuariosComponent implements OnInit {
  usuarios!: Usuario[];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe((response) => {
      this.usuarios = response.data;
    });
  }
}
