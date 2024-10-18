import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01-property-binding',
  templateUrl: './exo01-property-binding.component.html',
  styleUrl: './exo01-property-binding.component.scss'
})
export class Exo01PropertyBindingComponent {


  nomComplet: string = "Hello World";
  email: string = "hello@world.com";
  dateNaiss: Date = new Date(2000, 12, 31);
  genre: boolean = true;
  langues: string[] = ["Japonais", "Anglais", "Français"];
  image?: string = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x4.jpg";
}
