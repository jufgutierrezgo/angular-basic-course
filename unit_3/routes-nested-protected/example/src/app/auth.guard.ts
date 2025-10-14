import { CanActivateFn, CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  return auth.isLoggedIn()
    ? true
    : router.createUrlTree(['/login'], { queryParams: { redirectTo: state.url } });
};

export const authChildGuard: CanActivateChildFn = (route, state) => {
  // Reutiliza la misma lógica para hijos
  return authGuard(route, state);
};
