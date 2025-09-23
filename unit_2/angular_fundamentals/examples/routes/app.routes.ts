import { Routes } from '@angular/router';
import { HomeComponent, AboutComponent } from './app';

export const routes: Routes = [
  { path: '', component: HomeComponent },       // ruta raíz
  { path: 'about', component: AboutComponent }, // /about
  { path: '**', redirectTo: '' }                // comodín
];
