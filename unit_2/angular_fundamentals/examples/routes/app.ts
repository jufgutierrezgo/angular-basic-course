import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Home</h2>
    <p>Bienvenido a la página de inicio.</p>
  `
})
export class HomeComponent {}

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>About</h2>
    <p>Ejemplo básico de enrutamiento en Angular.</p>
  `
})
export class AboutComponent {}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1>Angular Routing • Ejemplo mínimo</h1>

    <nav style="display:flex; gap:12px; margin-bottom:12px;">
      <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>

    <hr />

    <router-outlet></router-outlet>
  `,
  styles: [`
    a { text-decoration: none; }
    .active { font-weight: 700; }
  `]
})
export class App {}
