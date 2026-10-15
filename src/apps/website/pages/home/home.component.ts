import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'web-home',
  imports: [MatButton, RouterLink],
  host: { class: 'flex flex-auto flex-col items-center justify-center gap-y-8 py-10 text-center' },
  templateUrl: './home.component.html',
})
export class HomeComponent {}
