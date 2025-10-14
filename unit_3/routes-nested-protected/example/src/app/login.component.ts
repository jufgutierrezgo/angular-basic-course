import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Login</h2>
    <p>Inicia sesión para continuar.</p>
    <button (click)="doLogin()">Login</button>
  `,
})
export class LoginComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  doLogin() {
    this.auth.login();
    // Si nos mandaron aquí protegidos, volvemos a la URL original.
    const qp = this.router.parseUrl(this.router.url).queryParams;
    const redirect = qp['redirectTo'] || '/dashboard';
    this.router.navigateByUrl(redirect);
  }
}
