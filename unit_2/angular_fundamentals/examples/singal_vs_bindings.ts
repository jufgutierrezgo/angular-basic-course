import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Signals + 4 tipos de binding </h2>

    <!-- 1) Interpolación -->
    <p>Contador: <strong>{{ counter() }}</strong></p>

    <!-- 2) Property binding -->
    <img [src]="imageUrl()" alt="Angular" width="90">

    <!-- 3) Event binding -->
    <div style="margin: 8px 0;">
      <button (click)="increment()">Incrementar</button>
      <button (click)="reset()" [disabled]="counter() === 0">Reiniciar</button>
    </div>

    <!-- 4) Two-way binding real con [(ngModel)] -->
    <label>
      Nota ([(ngModel)]):
      <input [(ngModel)]="note" placeholder="Escribe algo...">
    </label>
    <p>Eco de nota: {{ note }}</p>

    <hr>

    <!-- Two-way “manual” 100% con signal -->
    <label>
      Nombre (signal):
      <input
        [value]="name()"
        (input)="updateName($event)"
        placeholder="Tu nombre">
    </label>
    <p>Hola, {{ name() || 'Anónimo' }} 👋</p>
  `
})
export class AppComponent {
  // Estado reactivo con signals
  counter = signal(0);
  imageUrl = signal('https://angular.io/assets/images/logos/angular/angular.png');
  name = signal('');

  // Propiedad normal para [(ngModel)]
  note = '';

  increment() { this.counter.update(c => c + 1); }
  reset() { this.counter.set(0); }

  updateName(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }
}

bootstrapApplication(AppComponent);
