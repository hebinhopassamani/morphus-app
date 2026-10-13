import { Component, computed, inject, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Theming } from '@/app/core/theming';

@Component({
  imports: [MatIconButton, MatIcon],
  selector: 'mpx-topbar',
  styleUrl: './topbar.component.css',
  templateUrl: './topbar.component.html',
})
export class MpxTopBarComponent {
  readonly menuToggle = output<void>();
  private readonly theming = inject(Theming);
  protected readonly isDark = computed(() => this.theming.isDark());

  protected toggleScheme() {
    this.theming.scheme.set(this.isDark() ? 'light' : 'dark');
  }
}
