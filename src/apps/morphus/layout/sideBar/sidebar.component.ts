import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { BuiSidebar, BuiSidebarBody, BuiSidebarHeader } from '@builder-kit/sidebar';

@Component({
  imports: [MatIcon, BuiSidebar, BuiSidebarHeader, BuiSidebarBody],
  selector: 'mpx-sidebar',
  host: { class: 'flex w-full flex-auto flex-col overflow-x-clip' },
  styleUrl: './sidebar.component.css',
  templateUrl: './sidebar.component.html',
})
export class MpxSidebarComponent {}
