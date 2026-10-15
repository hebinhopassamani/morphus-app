import { isPlatformBrowser } from '@angular/common';
import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  PLATFORM_ID,
  provideAppInitializer,
} from '@angular/core';
import { AuthClientConfig, provideAuth0 } from '@auth0/auth0-angular';
import { WINDOW } from '@/apps/core/window';
import { Auth } from './auth';

export type AuthOptions = {
  domain: string;
  clientId: string;
  /** Must match an "Allowed Callback URL" in the Auth0 application. Defaults to `/`. */
  callbackPath?: string;
  /** Where the user is sent when the login callback fails. Defaults to `/`. */
  errorPath?: string;
};

export const provideAuth = ({ callbackPath = '/', ...options }: AuthOptions): EnvironmentProviders =>
  makeEnvironmentProviders([
    provideAuth0(),
    // Configure and initialize Auth0 in the browser only. The callback query (`?code=&state=`)
    // must be read before the initial navigation runs the root redirect.
    provideAppInitializer(() => {
      if (!isPlatformBrowser(inject(PLATFORM_ID))) {
        return;
      }

      inject(AuthClientConfig).set({
        ...options,
        authorizationParams: {
          redirect_uri: new URL(callbackPath, inject(WINDOW)!.location.origin).href,
          ui_locales: 'pt-BR',
        },
        // Browsers block Auth0's third-party cookies, so the session survives reloads via refresh tokens instead.
        useRefreshTokens: true,
        cacheLocation: 'localstorage',
      });
      inject(Auth);
    }),
  ]);
