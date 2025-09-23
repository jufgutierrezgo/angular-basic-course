import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>Contador con signals</h2>
    <p>Valor actual: {{ counter() }}</p>

    <button (click)="increment()">Incrementar</button>
    <button (click)="reset()">Reiniciar</button>
  `
})
export class AppComponent {
  // Definir un signal con valor inicial
  counter = signal(0);

  increment() {
    this.counter.update(c => c + 1);
  }

  reset() {
    this.counter.set(0);
  }
}

bootstrapApplication(AppComponent);