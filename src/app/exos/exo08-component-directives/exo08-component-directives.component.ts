import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo08-component-directives',
  templateUrl: './exo08-component-directives.component.html',
  styleUrl: './exo08-component-directives.component.scss'
})
export class Exo08ComponentDirectivesComponent implements OnInit{

  hauteur: number = 50;
  largeur: number = 50;
  couleur: string = '#ffffff'
  borderCouleur: string = '#000000'
  isCercle: boolean = false;
  borderLargeur: number = 1;
  borderStyle: string = 'solid'
  style: any;

  ngOnInit(): void {
    this.update();
  }

  update(): void {
    this.style = {
      'height': this.hauteur + 'px',
      'width': this.largeur + 'px',
      'background-color': this.couleur,
      'border-width': this.borderLargeur + 'px',
      'border-style': this.borderStyle,
    };
  }
}
