import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: `
    <div [contentEditable]="isEditable">
  `,
})
export class App {
  isEditable = true;
}