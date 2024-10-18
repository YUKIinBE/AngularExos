import { Component } from '@angular/core';

@Component({
  selector: 'app-exo04-attribute-binding',
  templateUrl: './exo04-attribute-binding.component.html',
  styleUrl: './exo04-attribute-binding.component.scss'
})
export class Exo04AttributeBindingComponent {
  hidden: boolean = true;
  type: string = "password"

  changeVisibility (): void {
    if (this.hidden) this.type = "text";
    else this.type = "password";
    
    this.hidden = !this.hidden;
  }
}
