import { Routes } from '@angular/router';

export const pacientesRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pacientes.component').then((c) => c.PacientesComponent),
  },
];
