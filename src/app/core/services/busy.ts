import { Service, signal } from '@angular/core';

@Service()
export class Busy {
  private busyRequestCount = 0;

  loading = signal(false);

  busy(): void {
    this.busyRequestCount++;
    this.loading.set(true);
  }

  idle(): void {
    this.busyRequestCount = Math.max(0, this.busyRequestCount - 1);

    this.loading.set(this.busyRequestCount > 0);
  }
}
