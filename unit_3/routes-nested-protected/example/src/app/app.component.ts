// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',               // 👈 selector explícito
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <h1>Angular Routing • Ejemplo</h1>

    <nav style="display:flex; gap:12px; margin-bottom:12px;">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
