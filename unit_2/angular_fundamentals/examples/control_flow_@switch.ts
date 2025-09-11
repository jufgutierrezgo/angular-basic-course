import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Traffic Light</h2>

    <p>Current color: <b>{{ currentColor }}</b></p>

    @switch (currentColor) {
      @case ('red') {
        <p>🛑 Stop!</p>
      }
      @case ('yellow') {
        <p>⚠️ Get ready...</p>
      }
      @case ('green') {
        <p>✅ Go!</p>
      }
      @default {
        <p>❓ Unknown signal</p>
      }
    }

    <hr />
    <!-- Buttons to change the state -->
    <button (click)="setColor('red')">Red</button>
    <button (click)="setColor('yellow')">Yellow</button>
    <button (click)="setColor('green')">Green</button>
  `,
})
export class App {
  currentColor = 'red';

  setColor(color: string) {
    this.currentColor = color;
  }
}
