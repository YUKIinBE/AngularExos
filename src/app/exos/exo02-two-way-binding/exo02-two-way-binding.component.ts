import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-exo02-two-way-binding',
  templateUrl: './exo02-two-way-binding.component.html',
  styleUrl: './exo02-two-way-binding.component.scss'
})
export class Exo02TwoWayBindingComponent {

  nom!: string;
  prenom!: string;
  dateNaiss!: Date;
  genre!: string;
  langue!: string;
  image!: string;
}
