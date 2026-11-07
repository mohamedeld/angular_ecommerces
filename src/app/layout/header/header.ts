import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Busy } from '../../core/services/busy';

@Component({
  imports: [MatBadgeModule, MatIconModule, MatButton, RouterLink, RouterLinkActive, MatProgressBar],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  busy = inject(Busy);
}
