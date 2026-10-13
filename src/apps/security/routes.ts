import { Routes } from '@angular/router';
import { SecurityLayout } from '@security/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: SecurityLayout,
    children: [],
  },
];
