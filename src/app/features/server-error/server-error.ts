import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-server-error',
  styleUrl: './server-error.css',
  templateUrl: './server-error.html',
})
export default class ServerError {
  retry(): void {
    window.location.reload();
  }
}
