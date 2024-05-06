import { Routes } from '@angular/router';

export const citersRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./cites.component').then((c) => c.CitesComponent),
    children: [
      {
        path: 'list-cites',
        loadComponent: () =>
          import('./pages/table-cites/table-cites.component').then(
            (c) => c.TableCitesComponent
          ),
      },
      {
        path: 'detail/:id',
        loadComponent: () =>
          import('./pages/cites-detalle/cites-detalle.component').then(
            (c) => c.CitesDetalleComponent
          ),
      },
      {
        path: 'create-cites',
        loadComponent: () =>
          import('./pages/add-cites/add-cites.component').then(
            (c) => c.AddCitesComponent
          ),
      },
      {
        path: '',
        redirectTo: 'list-cites',
        pathMatch: 'full',
      },
    ],
  },
];
