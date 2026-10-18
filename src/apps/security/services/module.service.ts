import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@src/environments/environment';

// Espelha exatamente o nosso modelo do C# de ontem
export interface ModuleResponse {
  id: string;
  name: string;
  key: string;
  system: boolean;
  businessId: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  // Injeção moderna do Angular usando a função inject()
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.apiUrl}/api/v1/module`;

  /**
   * Busca os módulos cadastrados no PostgreSQL remoto através da API
   */
  getModules(): Observable<ModuleResponse[]> {
    return this.http.get<ModuleResponse[]>(this.apiUrl);
  }

  /**
   * Dispara a verificação e o motor de e-mails Outbox no Back-end
   */
  verifyModules(): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/verify`, {});
  }
}
