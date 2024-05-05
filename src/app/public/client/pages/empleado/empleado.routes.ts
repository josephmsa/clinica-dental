import { Routes } from '@angular/router';

export const empleadosRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./empleado.component').then((c) => c.EmpleadoComponent),
  },
];
