import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-error',
  styleUrl: './error.css',
  templateUrl: './error.html',
})
export class Error {
  title = input('Something went wrong!');
  message = input('We couldn’t load the data. Please try again.');
  retry = output<void>();
}
