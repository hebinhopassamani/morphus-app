import { Routes } from '@angular/router';
import { authGuard } from '@core/auth';
import { MorphusLayout } from '@morphus/layout/layout.component';
import { ModulesComponent } from '@morphus/pages/modules/module.component';

export const routes: Routes = [
  {
    path: '',
    component: MorphusLayout,
    children: [
      {
        path: 'module',
        component: ModulesComponent,
        canActivate: [authGuard], // Só entra se o Auth0 confirmar que está logado!
      },
    ],
  },
];
