import { Component } from '@angular/core';

interface Article {
  nom: string;
  quantite: number;
  date: Date;
}

@Component({
  selector: 'app-exo09-structural-directives',
  templateUrl: './exo09-structural-directives.component.html',
  styleUrl: './exo09-structural-directives.component.scss'
})


export class Exo09StructuralDirectivesComponent{
  
  nom: string = "";
  quantite: number = 1;
  panier: Article[]
  = [
    { nom: 'tomate', quantite: 1, date: new Date() },
    { nom: 'patate', quantite: 2, date: new Date() },
    { nom: 'banane', quantite: 3, date: new Date() }
  ];

  add() : void {
    this.panier?.push({
      nom: this.nom, 
      quantite: this.quantite, 
      date: new Date()
    })
    this.nom = '';
    this.quantite = 1;
  }
  remove(article: Article) : void {
    this.panier = this.panier.filter(a => a != article);
  }
  increase(index: number) : void {
    this.panier[index].quantite++;
  }
  decrease(index: number) : void {
    this.panier[index].quantite--;
    if (this.panier[index].quantite <= 0){
      this.remove(this.panier[index]);
    }
  }
  
}
