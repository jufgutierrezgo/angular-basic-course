// Import the Component decorator from Angular core package
import { Component } from '@angular/core';

// Import the bootstrap function to start the Angular app
import { bootstrapApplication } from '@angular/platform-browser';

// Define a new Angular component
@Component({
  // The custom HTML tag that represents this component
  selector: 'app-root',

  // The HTML template for the component
  template: `
    <h2>Simple Counter</h2>
    <!-- Show the current value of count -->
    <p>You clicked {{ count }} times.</p>
    <!-- Call increment() when button is clicked -->
    <button (click)="increment()">Click me</button>
  `,
})
// The TypeScript class for the component
export class CounterApp {
  // A property to store the number of clicks
  count = 0;

  // A method that increases the count by 1
  increment() {
    this.count++;
  }
}

// Start the Angular app with CounterApp as the root component
bootstrapApplication(CounterApp);
