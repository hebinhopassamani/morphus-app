import { Component } from '@angular/core';
import { MpxContentComponent } from '@morphus/layout/content/content.component';
import { MpxSidebarComponent } from '@morphus/layout/sideBar/sidebar.component';
import { MpxTopBarComponent } from '@morphus/layout/topbar/topbar.component';

@Component({
  imports: [MpxSidebarComponent, MpxContentComponent, MpxTopBarComponent],
  selector: 'mpx-layout',
  templateUrl: './layout.component.html',
})
export class MorphusLayout {}
