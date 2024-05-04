import { Routes } from '@angular/router';

export const clientRoutes: Routes = [
  {
    path: 'cites',
    loadComponent: () =>
      import('./pages/cites/cites.component').then((c) => c.CitesComponent),
  },
  {
    path: '',
    redirectTo: 'cites',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'cites',
    pathMatch: 'full',
  },
];
