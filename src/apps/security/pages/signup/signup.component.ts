import { Component, effect, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '@/apps/core/auth';

@Component({
  selector: 'sec-signup',
  imports: [MatButton, MatCard, MatCardContent, MatIcon, RouterLink],
  host: { class: 'flex w-full flex-auto flex-col items-center justify-center p-6' },
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  protected readonly auth = inject(Auth);
  private readonly router = inject(Router);

  constructor() {
    effect(() => {
      if (this.auth.isLoading() || this.auth.error()) {
        return;
      }

      if (this.auth.isAuthenticated()) {
        this.router.navigateByUrl('/admin');
      } else {
        this.auth.signup();
      }
    });
  }
}
