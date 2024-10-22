import { Component } from '@angular/core';

@Component({
  selector: 'app-exo07-custom-pipes',
  templateUrl: './exo07-custom-pipes.component.html',
  styleUrl: './exo07-custom-pipes.component.scss'
})
export class Exo07CustomPipesComponent {
  temps: number = 55;
  chrono: any;
  degre: number = 20;
  type: string = 'toCelsius';

  start(): void {
    if (this.chrono) return;
    this.chrono = setInterval(() => {
      this.temps++
    }, 1000);
  }

  stop(): void {
    clearInterval(this.chrono)
    this.chrono = null;
  }

  reset(): void {
    this.stop();
    this.temps = 0;
  }
}
