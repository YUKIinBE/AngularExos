import { Component } from '@angular/core';

@Component({
  selector: 'app-exo06-pipes',
  templateUrl: './exo06-pipes.component.html',
  styleUrl: './exo06-pipes.component.scss'
})
export class Exo06PipesComponent {
  myString: string = "Hello world";
  myNumber1: number = 12345.6789;
  myNumber2: number = 123;
  myPercentage: number = 0.123
  myDate: Date = new Date(2020, 0, 1);
  myObject: {} =  { nom: 'Marchal', prenom: 'Yuki'}
}
