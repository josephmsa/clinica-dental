import { Routes } from '@angular/router';

export const usuariosRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./usuarios.component').then((c) => c.UsuariosComponent),
  },
];
