// src/app/products/products.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-page',
  standalone: false,
  imports: [CommonModule],
  template: `
    <h2>Products</h2>
    <ul>
      <li *ngFor="let p of products">{{ p }}</li>
    </ul>
  `,
})
export class ProductsPage {
  products = ['Laptop', 'Smartphone', 'Headphones'];
}
