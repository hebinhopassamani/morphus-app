import { Component, signal } from '@angular/core';
import { email, form, FormField, FormRoot, required } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sec-signin',
  imports: [FormField, FormRoot, MatButton, MatCard, MatCardContent, MatCheckbox, MatIcon, MatError, MatFormField, MatInput, MatLabel, RouterLink],
  host: { class: 'flex w-full flex-auto flex-col items-center justify-center p-6' },
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  private readonly signinModel = signal({
    email: '',
    password: '',
    savePassword: false,
  });

  protected readonly signinForm = form(
    this.signinModel,
    (schema) => {
      required(schema.email, { message: 'E-mail é obrigatório.' });
      email(schema.email, { message: 'Informe um e-mail válido.' });
      required(schema.password, { message: 'Senha é obrigatória.' });
    },
    {
      submission: {
        action: async () => {
          // Seam for the sign-in call. The form only validates for now.
        },
      },
    }
  );

  protected setSavePassword(checked: boolean) {
    this.signinModel.update((model) => ({ ...model, savePassword: checked }));
  }
}
