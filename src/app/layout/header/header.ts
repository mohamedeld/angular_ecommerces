import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [MatBadgeModule, MatIconModule, MatButton],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
