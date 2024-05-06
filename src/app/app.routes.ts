import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./public/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./public/about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./public/conact/conact.component').then((c) => c.ConactComponent),
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./public/servicios/servicios.component').then(
        (c) => c.ServiciosComponent
      ),
  },
  {
    path: 'price',
    loadComponent: () =>
      import('./public/price/price.component').then((c) => c.PriceComponent),
  },
  {
    path: 'appointment',
    loadComponent: () =>
      import('./public/appointment/appointment.component').then(
        (c) => c.AppointmentComponent
      ),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./public/team/team.component').then((c) => c.TeamComponent),
  },
  {
    path: 'testimonial',
    loadComponent: () =>
      import('./public/testimonial/testimonial.component').then(
        (c) => c.TestimonialComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./public/client/pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./public/client/client.routes').then((c) => c.clientRoutes),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
