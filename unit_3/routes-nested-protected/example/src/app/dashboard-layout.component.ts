import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <h1>Dashboard</h1>
    <nav style="display:flex; gap:12px; margin-bottom:12px;">
      <a routerLink="/dashboard" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
      <a routerLink="settings" routerLinkActive="active">Ajustes</a>
      <a routerLink="reports" routerLinkActive="active">Reportes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class DashboardLayoutComponent {}

