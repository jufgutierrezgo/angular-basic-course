// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { UsersPage } from './users/users.page';

export const routes: Routes = [
  { path: '', component: UsersPage },
  { path: '**', redirectTo: '' },
];
