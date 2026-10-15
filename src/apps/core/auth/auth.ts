import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';
import { WINDOW } from '@/apps/core/window';

@Service()
export class Auth {
  // Dependencies
  private window = inject(WINDOW);
  // Auth0's AuthService reads `location` on creation, so it must never be created during SSR.
  private auth0 = isPlatformBrowser(inject(PLATFORM_ID)) ? inject(AuthService) : null;

  // State
  readonly isLoading = this.auth0 ? toSignal(this.auth0.isLoading$, { initialValue: true }) : signal(true).asReadonly();
  readonly isAuthenticated = this.auth0 ? toSignal(this.auth0.isAuthenticated$, { initialValue: false }) : signal(false).asReadonly();
  readonly user = this.auth0 ? toSignal(this.auth0.user$, { initialValue: null }) : signal(null).asReadonly();
  readonly error = this.auth0 ? toSignal(this.auth0.error$, { initialValue: null }) : signal(null).asReadonly();

  login() {
    this.auth0?.loginWithRedirect();
  }

  signup() {
    this.auth0?.loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } });
  }

  logout() {
    this.auth0?.logout({ logoutParams: { returnTo: this.window?.location.origin } });
  }
}
