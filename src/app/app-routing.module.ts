import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Exo01PropertyBindingComponent } from './exos/exo01-property-binding/exo01-property-binding.component';
import { Exo02TwoWayBindingComponent } from './exos/exo02-two-way-binding/exo02-two-way-binding.component';
import { Exo03EventBindingComponent } from './exos/exo03-event-binding/exo03-event-binding.component';
import { Exo04AttributeBindingComponent } from './exos/exo04-attribute-binding/exo04-attribute-binding.component';
import { Exo05BaseRoutingComponent } from './exos/exo05-base-routing/exo05-base-routing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exos', children: [
    { path: 'exo01', component: Exo01PropertyBindingComponent },
    { path: 'exo02', component: Exo02TwoWayBindingComponent },
    { path: 'exo03', component: Exo03EventBindingComponent },
    { path: 'exo04', component: Exo04AttributeBindingComponent },
    { path: 'exo05', component: Exo05BaseRoutingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
