import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '@/environments/environment'; // 👈 Usando o alias padrão curto

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);

  // Só tenta ler o LocalStorage se estiver rodando no navegador (Segurança para SSR)
  if (isPlatformBrowser(platformId)) {
    // Lê a sessão que o Auth0 grava nativamente no LocalStorage
    const authDataRaw = localStorage.getItem('builderkit:auth') || localStorage.getItem('auth');

    if (authDataRaw) {
      try {
        const authData = JSON.parse(authDataRaw);
        const token = authData?.accessToken || authData?.token;

        // Verifica se a chamada está indo para o nosso backend em C#
        const isApiUrl = req.url.startsWith(environment.apiUrl);

        if (token && isApiUrl) {
          // Clona a requisição e injeta o cabeçalho Authorization Bearer
          req = req.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
      } catch (e) {
        console.error('Falha ao processar o Token JWT no Interceptor:', e);
      }
    }
  }

  return next(req);
};
