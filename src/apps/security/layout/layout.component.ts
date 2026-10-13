import { Component } from '@angular/core';
import { SecContentComponent } from '@security/layout/content/content.component';
import { SecSidebarComponent } from '@security/layout/sideBar/sidebar.component';
import { SecTopBarComponent } from '@security/layout/topbar/topbar.component';

@Component({
  imports: [SecSidebarComponent, SecContentComponent, SecTopBarComponent],
  selector: 'sec-layout',
  templateUrl: './layout.component.html',
})
export class SecurityLayout {}
