import { Component } from '@angular/core';

@Component({
  selector: 'app-exo03-event-binding',
  templateUrl: './exo03-event-binding.component.html',
  styleUrl: './exo03-event-binding.component.scss'
})
export class Exo03EventBindingComponent {
  temps: number = 0;
  chrono: any;
  

  start (): void {
    if (this.chrono) return;
    this.chrono = setInterval(() => {
      this.temps++
    }, 1000);
  }

  stop (): void {
    clearInterval(this.chrono)
    this.chrono = null;
  }

  reset (): void {
    this.stop();
    this.temps = 0;
  }
}
