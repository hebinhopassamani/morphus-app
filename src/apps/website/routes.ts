import { Routes } from '@angular/router';
import { WebSiteLayout } from '@website/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: WebSiteLayout,
    children: [],
  },
];
