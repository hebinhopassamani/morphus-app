import { CdkScrollable } from '@angular/cdk/scrolling';
import { Component, effect, inject, untracked, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Media } from '@/app/core/media';
import { Theming } from '@/app/core/theming';
import { BuiScrollViewport } from '@/app/core/viewport-scroller';
import { MpxContentComponent } from '@morphus/layout/content/content.component';
import { SidebarService } from '@morphus/layout/data/sidebar';
import { MpxSidebarComponent } from '@morphus/layout/sideBar/sidebar.component';
import { MpxTopBarComponent } from '@morphus/layout/topbar/topbar.component';

@Component({
  imports: [MatSidenav, MatSidenavContainer, MatSidenavContent, MpxSidebarComponent, MpxContentComponent, MpxTopBarComponent, CdkScrollable, BuiScrollViewport],
  selector: 'mpx-layout',
  host: { class: 'flex min-h-full w-full flex-auto flex-col' },
  templateUrl: './layout.component.html',
})
export class MorphusLayout {
  private readonly media = inject(Media);
  private readonly router = inject(Router);
  protected readonly sidebarService = inject(SidebarService);
  protected readonly theming = inject(Theming);
  private readonly sidenav = viewChild.required<MatSidenav>('sidenav');
  private readonly routerEvent = toSignal(this.router.events);
  protected readonly isMobile = this.media.match('(width < 64rem)');

  constructor() {
    effect(() => {
      const event = this.routerEvent();
      const isMobile = untracked(() => this.isMobile());

      if (!(event instanceof NavigationEnd) || !isMobile) {
        return;
      }

      untracked(() => this.sidenav().toggle(false));
    });
  }
}
