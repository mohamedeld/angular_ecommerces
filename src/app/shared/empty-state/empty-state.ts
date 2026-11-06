import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-empty-state',
  styleUrl: './empty-state.css',
  templateUrl: './empty-state.html',
})
export class EmptyState {
  title = input('No data found');
  message = input('There is nothing to display right now.');
}
