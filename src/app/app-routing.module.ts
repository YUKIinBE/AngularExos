import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Exo01PropertyBindingComponent } from './exos/exo01-property-binding/exo01-property-binding.component';
import { Exo02TwoWayBindingComponent } from './exos/exo02-two-way-binding/exo02-two-way-binding.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exos', children: [
    { path: 'exo01', component: Exo01PropertyBindingComponent},
    { path: 'exo02', component: Exo02TwoWayBindingComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
