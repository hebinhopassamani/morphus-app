import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Auth } from '@/apps/core/auth';

@Component({
  selector: 'sec-signin',
  imports: [MatButton, MatCard, MatCardContent, MatIcon],
  host: { class: 'flex w-full flex-auto flex-col items-center justify-center p-6' },
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  protected readonly auth = inject(Auth);
}
