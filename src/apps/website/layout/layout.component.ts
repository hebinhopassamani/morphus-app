import { Component } from '@angular/core';
import { WebContentComponent } from '@website/layout/content/content.component';
import { WebTopBarComponent } from '@website/layout/topbar/topbar.component';

@Component({
  imports: [WebContentComponent, WebTopBarComponent],
  selector: 'web-layout',
  templateUrl: './layout.component.html',
})
export class WebSiteLayout {}
