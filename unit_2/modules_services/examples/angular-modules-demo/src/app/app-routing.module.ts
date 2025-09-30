import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.page').then(m => m.ProductsPage),
  },
  { path: '**', redirectTo: '' }, // comodín
];
