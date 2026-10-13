import { Routes } from '@angular/router';
import { SecurityLayout } from '@security/layout/layout.component';
import { SigninComponent } from '@security/signin/signin.component';
import { SignupComponent } from '@security/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: SecurityLayout,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
];
