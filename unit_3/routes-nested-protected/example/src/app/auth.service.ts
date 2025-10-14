import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _logged = signal(false);

  isLoggedIn(): boolean {
    return this._logged();
  }

  login() { this._logged.set(true); }
  logout() { this._logged.set(false); }
}
