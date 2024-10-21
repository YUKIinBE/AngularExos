import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Exo01PropertyBindingComponent } from './exos/exo01-property-binding/exo01-property-binding.component';
import { FormsModule } from '@angular/forms';
import { ExosComponent } from './exos/exos.component';
import { Exo02TwoWayBindingComponent } from './exos/exo02-two-way-binding/exo02-two-way-binding.component';
import { Exo03EventBindingComponent } from './exos/exo03-event-binding/exo03-event-binding.component';
import { Exo04AttributeBindingComponent } from './exos/exo04-attribute-binding/exo04-attribute-binding.component';
import { Exo05BaseRoutingComponent } from './exos/exo05-base-routing/exo05-base-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExosComponent,
    Exo01PropertyBindingComponent,
    Exo02TwoWayBindingComponent,
    Exo03EventBindingComponent,
    Exo04AttributeBindingComponent,
    Exo05BaseRoutingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
