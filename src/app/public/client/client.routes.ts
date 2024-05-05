import { Routes } from '@angular/router';

export const clientRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./client.component').then((c) => c.ClientComponent),
    children: [
      {
        path: 'employes',
        loadChildren: () =>
          import('./pages/empleado/empleado.routes').then(
            (c) => c.empleadosRoutes
          ),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('./pages/horario-empleado/horario.routes').then(
            (c) => c.horarioRoutes
          ),
      },
      {
        path:'patients',
        loadChildren:()=>
          import('./pages/pacientes/pacientes.routes').then(
            (c)=>c.pacientesRoutes
          ),
      },
      {
        path: 'user',
        loadChildren:()=>
          import('./pages/usuarios/usuarios.routes').then(
            (c)=>c.usuariosRoutes
          ),
      },
      {
        path: 'cites',
        loadChildren: () =>
          import('./pages/cites/cites.routes').then((c) => c.citersRoutes),
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
