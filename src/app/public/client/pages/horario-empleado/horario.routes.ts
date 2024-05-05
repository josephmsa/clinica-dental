import { Routes } from '@angular/router';

export const horarioRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./horario-empleado.component').then((c) => c.HorarioEmpleadoComponent),
  },
];
