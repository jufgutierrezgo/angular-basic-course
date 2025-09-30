import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  template: `
    <h1>Angular + Módulos (bootstrapApplication)</h1>

    <nav style="display:flex; gap:12px; margin-bottom:12px;">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/products" routerLinkActive="active">Products</a>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
