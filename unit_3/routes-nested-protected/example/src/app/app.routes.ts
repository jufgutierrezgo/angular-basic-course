// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { DashboardHomeComponent } from './dashboard-home.component';
import { SettingsComponent } from './settings.component';
import { ReportsComponent } from './reports.component';
import { authGuard, authChildGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }, // 

  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'reports', component: ReportsComponent },
    ],
  },

  { path: 'login', loadComponent: () => import('./login.component').then(m => m.LoginComponent) },
  { path: '**', redirectTo: '' },
];
