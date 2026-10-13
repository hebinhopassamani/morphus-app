import { Component, computed, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Theming } from '@/app/core/theming';

@Component({
  imports: [MatIconButton, MatIcon],
  selector: 'sec-topbar',
  styleUrl: './topbar.component.css',
  templateUrl: './topbar.component.html',
})
export class SecTopBarComponent {
  private readonly theming = inject(Theming);
  protected readonly isDark = computed(() => this.theming.isDark());

  protected toggleScheme() {
    this.theming.scheme.set(this.isDark() ? 'light' : 'dark');
  }
}
