import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule], // Needed for [(ngModel)]
  template: `
    <h2>Angular Data Binding Demo</h2>

    <!-- 1. Interpolation: show component data directly in the view -->
    <p>Welcome, {{ username }}!</p>

    <!-- 2. Property Binding: bind a property value to an HTML attribute -->
    <img [src]="imageUrl" [alt]="username" width="150" />

    <!-- 3. Event Binding: listen to a DOM event and trigger a method -->
    <button (click)="changeUsername()">Change Username</button>

    <!-- 4. Two-way Binding: keep input field and component property in sync -->
    <div>
      <label>
        Update name:
        <input [(ngModel)]="username" />
      </label>
    </div>

    <hr />

    <!-- Display the current value of username -->
    <p><b>Current username:</b> {{ username }}</p>
  `,
})
export class App {
  // Data property (used for interpolation and two-way binding)
  username = 'Alice';

  // Property bound to the <img> tag
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  // Method triggered by event binding
  changeUsername() {
    this.username = 'Bob';
  }
}
