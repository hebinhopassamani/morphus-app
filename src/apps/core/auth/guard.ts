import { isPlatformServer } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { authGuardFn } from '@auth0/auth0-angular';

export const authGuard: CanActivateFn = (route, state) => (isPlatformServer(inject(PLATFORM_ID)) ? true : authGuardFn(route, state));
