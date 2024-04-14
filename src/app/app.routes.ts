import { Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ConactComponent } from './public/conact/conact.component';
import { PriceComponent } from './public/price/price.component';
import { AppointmentComponent } from './public/appointment/appointment.component';
import { TeamComponent } from './public/team/team.component';
import { TestimonialComponent } from './public/testimonial/testimonial.component';
import { ServiciosComponent } from './public/servicios/servicios.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ConactComponent},
    {path: 'servicios', component: ServiciosComponent},
    {path: 'price', component: PriceComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'team', component: TeamComponent},
    {path: 'testimonial', component: TestimonialComponent}
];
