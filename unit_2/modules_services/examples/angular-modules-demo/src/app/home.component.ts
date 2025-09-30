import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  template: `
    <h2>Home</h2>
    <p>Ejemplo base: app standalone + Feature Module lazy (ProductsModule).</p>
  `,
})
export class HomeComponent {}
