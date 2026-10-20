import { Component, inject, Injector, OnInit } from '@angular/core'; // 🚀 Importado o Injector
import { toObservable } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Auth } from '@core/auth'; // Se
import { WINDOW } from '@/apps/core/window';

@Component({
  selector: 'mpx-signin',
  templateUrl: './signin.component.html',
  imports: [MatButton, MatCard, MatCardContent, MatIcon],
  standalone: true,
})
export class SigninComponent implements OnInit {
  protected readonly auth = inject(Auth);
  private readonly router = inject(Router);

  // 🧙‍♂️ O TRUQUE DE MESTRE: Capturamos o injetor aqui na raiz da classe
  private readonly injector = inject(Injector);

  ngOnInit() {
    // Agora podemos chamar o método de monitoramento de forma explícita e limpa!
    this.monitorarCarregamentoUsuario();
  }

  // O seu método personalizado e bem estruturado:
  monitorarCarregamentoUsuario(): void {
    // Passamos o injector nas opções para liberar o uso do toObservable() em métodos!
    toObservable(this.auth.isLoading, { injector: this.injector }).subscribe((loading) => {
      // 1. Trava contra loops enquanto o callback do Auth0 processa a URL
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('code') && urlParams.has('state')) {
        return;
      }

      // 2. Se o Auth0 ainda está varrendo o Local Storage, aguardamos em paz
      if (loading) {
        return;
      }

      // 3. Carregamento finalizado! Tomamos a ação de forma controlada
      if (this.auth.isAuthenticated()) {
        this.router.navigateByUrl('/admin');
      } else {
        this.auth.login();
      }
    });
  }
}
