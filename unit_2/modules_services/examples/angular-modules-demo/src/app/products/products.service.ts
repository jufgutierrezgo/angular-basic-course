import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  private items = ['Laptop', 'Smartphone', 'Headphones'];

  getProducts(): string[] {
    return [...this.items];
  }
}
