import { Component } from '@angular/core';

@Component({
  selector: 'app-exo05-base-routing',
  templateUrl: './exo05-base-routing.component.html',
  styleUrl: './exo05-base-routing.component.scss'
})
export class Exo05BaseRoutingComponent {
  html: string = `<a routerLink="/exos/exo01">
			Exo01 : Property Binding (One-Way)
		</a>`;
  route: string = `{ path: 'exos', children: [
    { path: 'exo01', component: Exo01PropertyBindingComponent },
  ]}`
}
