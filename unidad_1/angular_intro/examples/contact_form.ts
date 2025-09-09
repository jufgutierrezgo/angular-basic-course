import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // 👈 add this

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // 👈 include here
  template: `
    <h2>Contact Form</h2>

    <label>
      Name:
      <input [(ngModel)]="name" placeholder="Enter your name" />
    </label>
    <br /><br />

    <label>
      Email:
      <input [(ngModel)]="email" placeholder="Enter your email" />
    </label>
    <br /><br />

    <button (click)="saveContact()">Save Contact</button>

    <hr />

    <h3>Saved Contact:</h3>
    <p *ngIf="savedName && savedEmail">
      Name: {{ savedName }} <br />
      Email: {{ savedEmail }}
    </p>

    <p *ngIf="invalidEmail" style="color:red;">
      Please enter a valid email address.
    </p>
  `,
})
export class ContactFormApp {
  name = '';
  email = '';
  savedName = '';
  savedEmail = '';
  invalidEmail = false;

  saveContact() {
    const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
    this.invalidEmail = !emailPattern.test(this.email);
    if (!this.invalidEmail) {
      this.savedName = this.name.trim();
      this.savedEmail = this.email.trim();
    }
  }
}

bootstrapApplication(ContactFormApp);
