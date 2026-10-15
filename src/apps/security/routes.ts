import { Routes } from '@angular/router';
import { SecurityLayout } from '@security/layout/layout.component';
import { SigninComponent } from '@security/pages/signin/signin.component';
import { SignoutComponent } from '@security/pages/signout/signout.component';
import { SignupComponent } from '@security/pages/signup/signup.component';

export const routes: Routes = [
  {
    path: '',
    component: SecurityLayout,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'signout', component: SignoutComponent },
    ],
  },
];
