import { Component, effect, inject } from '@angular/core';
import { Auth } from '@/apps/core/auth';

@Component({
  selector: 'sec-signout',
  host: { class: 'flex w-full flex-auto flex-col items-center justify-center p-6 text-neutral-11' },
  template: 'Saindo...',
})
export class SignoutComponent {
  private readonly auth = inject(Auth);

  constructor() {
    effect(() => {
      if (!this.auth.isLoading()) {
        this.auth.logout();
      }
    });
  }
}
