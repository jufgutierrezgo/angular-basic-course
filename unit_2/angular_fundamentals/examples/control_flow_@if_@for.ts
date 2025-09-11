import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>Fruit List</h2>

    <!-- Control flow with @if and @else -->
    @if (fruits.length > 0) {
      <ul>
        <!-- Loop with @for -->
        @for (fruit of fruits; track fruit) {
          <li>{{ fruit }}</li>
        }
      </ul>
    } @else {
      <p>No fruits available.</p>
    }
  `,
})
export class App {
  fruits = ['🍎 Apple', '🍌 Banana', '🍓 Strawberry'];
}
