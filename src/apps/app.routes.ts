import { Routes } from '@angular/router';
import { authGuard } from '@/apps/core/auth';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // A function keeps the SSR server from answering `/` with a 302, which would drop the Auth0 callback query.
    redirectTo: () => '/admin',
  },
  {
    path: 'admin',
    canActivate: [authGuard],
    loadChildren: () => import('@morphus/routes').then((m) => m.routes),
  },
  {
    path: 'security',
    loadChildren: () => import('@security/routes').then((m) => m.routes),
  },
  {
    path: 'home',
    loadChildren: () => import('@website/routes').then((m) => m.routes),
  },
];
