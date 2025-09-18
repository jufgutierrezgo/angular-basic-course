import { Component, Input } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

// === Componente hijo: recibe datos con @Input()
@Component({
  selector: 'user-card',
  template: `
    <div style="border:1px solid gray; margin:5px; padding:10px;">
      <h3>{{ name }}</h3>
      <p>Edad: {{ age }}</p>
    </div>
  `,
})
export class UserCard {
  @Input() name = '';
  @Input() age = 0;
}

// === Componente padre: envía los datos
@Component({
  selector: 'app-root',
  imports: [UserCard],   //  importa el hijo
  template: `
    <h2>Lista de usuarios</h2>
    <user-card [name]="'Juan'" [age]="25"></user-card>
    <user-card [name]="'María'" [age]="30"></user-card>
  `,
})
export class App {}

// === Punto de arranque
bootstrapApplication(App);