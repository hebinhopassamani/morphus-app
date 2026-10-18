import { Component, OnInit, inject } from '@angular/core';
import { ModuleResponse, ModuleService } from '@security/services/module.service';

@Component({
  selector: 'mpx-modules-page',
  templateUrl: './module.component.html',
  standalone: true,
})
export class ModulesComponent implements OnInit {
  private readonly moduleService = inject(ModuleService);

  public modules: ModuleResponse[] = [];

  ngOnInit() {
    // this.moduleService.getModules().subscribe({
    //   next: (data) => (this.modules = data),
    //   error: (err) => console.error('Erro ao buscar módulos da API:', err),
    // });
  }

  // Dentro do seu componentes de listagem (ex: modules.component.ts)
  executarVerificacao(): void {
    // 🚀 AJUSTADO: Chamando o nome correto que está no seu ModuleService!
    this.moduleService.verifyModules().subscribe({
      next: (resposta) => {
        // Exibe o alerta com a mensagem de sucesso que o .NET 11 devolveu
        alert(`Sucesso: ${resposta.message}`);
      },
      error: (erro) => {
        console.error('Erro ao disparar o EmailHandler no Backend:', erro);
      },
    });
  }
}
