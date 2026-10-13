import { Component, signal } from '@angular/core';
import { email, form, FormField, FormRoot, required, validate } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatIcon } from '@angular/material/icon';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'sec-signup',
  imports: [FormField, FormRoot, MatButton, MatCard, MatCardContent, MatCheckbox, MatIcon, MatError, MatFormField, MatInput, MatLabel, RouterLink],
  host: { class: 'flex w-full flex-auto flex-col items-center justify-center p-6' },
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  private readonly signupModel = signal({
    name: '',
    email: '',
    password: '',
    acceptedTerms: false,
  });

  protected readonly submitted = signal(false);

  protected readonly signupForm = form(
    this.signupModel,
    (schema) => {
      required(schema.name, { message: 'Nome é obrigatório.' });
      required(schema.email, { message: 'E-mail é obrigatório.' });
      email(schema.email, { message: 'Informe um e-mail válido.' });
      required(schema.password, { message: 'Senha é obrigatória.' });
      validate(schema.acceptedTerms, ({ value }) => {
        if (value()) {
          return null;
        }

        return { kind: 'required', message: 'Aceite os termos.' };
      });
    },
    {
      submission: {
        action: async () => {
          // Seam for the sign-up call. The form only validates for now.
        },
      },
    }
  );

  protected setAcceptedTerms(checked: boolean) {
    this.signupModel.update((model) => ({ ...model, acceptedTerms: checked }));
  }

  protected markSubmitted() {
    this.submitted.set(true);
  }
}
