import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Home (público)</h2>
    <p>Esta página no requiere login.</p>
    <a routerLink="/dashboard">Ir al Dashboard (protegido)</a>
  `,
})
export class HomeComponent {}
