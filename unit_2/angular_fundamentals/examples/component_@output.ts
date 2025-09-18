import { Component, Input, Output, EventEmitter } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// === Componente hijo: emite eventos con @Output()
@Component({
  selector: 'counter-button',
  // standalone: true,
  template: `
    <button (click)="increase()">+1</button>
    <button (click)="decrease()">-1</button>
  `,
})
export class CounterButton {
  // @Input(): recibe el valor actual
  @Input() value = 0;

  // @Output(): emite un evento al padre
  @Output() valueChange = new EventEmitter<number>();

  increase() {
    this.value++;
    this.valueChange.emit(this.value); // 🔹 avisa al padre
  }

  decrease() {
    this.value--;
    this.valueChange.emit(this.value);
  }
}

// === Componente padre: escucha al hijo
@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [CounterButton],
  template: `
    <h2>Contador con @Output()</h2>
    <p>Valor actual: {{ counter }}</p>

    <!-- El padre escucha el evento (valueChange) -->
    <counter-button [value]="counter" (valueChange)="updateCounter($event)"></counter-button>
  `,
})
export class App {
  counter = 0;

  updateCounter(newValue: number) {
    this.counter = newValue;
  }
}

// === Punto de arranque
bootstrapApplication(App);
