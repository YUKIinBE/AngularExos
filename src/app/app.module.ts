import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Exo01PropertyBindingComponent } from './exos/exo01-property-binding/exo01-property-binding.component';
import { FormsModule } from '@angular/forms';
import { ExosComponent } from './exos/exos.component';
import { Exo02TwoWayBindingComponent } from './exos/exo02-two-way-binding/exo02-two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExosComponent,
    Exo01PropertyBindingComponent,
    Exo02TwoWayBindingComponent,
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
