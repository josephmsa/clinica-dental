import { Routes } from '@angular/router';

export const citersRoutes: Routes = [
  {
    path: 'list-cites',
    loadComponent: () =>
      import('./cites.component').then((c) => c.CitesComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./cites-detalle/cites-detalle.component').then((c) => c.CitesDetalleComponent),
  },
  {
    path: '',
    redirectTo: 'list-cites',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'list-cites',
    pathMatch: 'full',
  },
];
