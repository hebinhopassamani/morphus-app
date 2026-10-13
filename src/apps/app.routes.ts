import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    path: 'admin',
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
