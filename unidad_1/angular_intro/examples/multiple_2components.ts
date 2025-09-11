import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
})
export class Student {
  username = 'studentAngular';
}

@Component({
  selector: 'app-root',
  template: `<app-user />`,
//   template: `<section><app-user /></section>`,
  imports: [Student],
})
export class App {}