import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Exo01PropertyBindingComponent } from './exos/exo01-property-binding/exo01-property-binding.component';
import { Exo02TwoWayBindingComponent } from './exos/exo02-two-way-binding/exo02-two-way-binding.component';
import { Exo03EventBindingComponent } from './exos/exo03-event-binding/exo03-event-binding.component';
import { Exo04AttributeBindingComponent } from './exos/exo04-attribute-binding/exo04-attribute-binding.component';
import { Exo05BaseRoutingComponent } from './exos/exo05-base-routing/exo05-base-routing.component';
import { Exo06PipesComponent } from './exos/exo06-pipes/exo06-pipes.component';
import { Exo07CustomPipesComponent } from './exos/exo07-custom-pipes/exo07-custom-pipes.component';
import { Exo08ComponentDirectivesComponent } from './exos/exo08-component-directives/exo08-component-directives.component';
import { Exo09StructuralDirectivesComponent } from './exos/exo09-structural-directives/exo09-structural-directives.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exos', children: [
    { path: 'exo01', component: Exo01PropertyBindingComponent },
    { path: 'exo02', component: Exo02TwoWayBindingComponent },
    { path: 'exo03', component: Exo03EventBindingComponent },
    { path: 'exo04', component: Exo04AttributeBindingComponent },
    { path: 'exo05', component: Exo05BaseRoutingComponent },
    { path: 'exo06', component: Exo06PipesComponent},
    { path: 'exo07', component: Exo07CustomPipesComponent },
    { path: 'exo08', component: Exo08ComponentDirectivesComponent},
    { path: 'exo09', component: Exo09StructuralDirectivesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
