import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './assignment-simple-binding/data-binding/data-binding.component';
import { DirectivesComponent } from './assignment-directives/directives/directives.component';
import { PropertyEventBindingComponent } from './assignment-binding-advanced/property-event-binding/property-event-binding.component';
import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './assignment-binding-advanced/game-control/game-control.component';
import { EvenComponent } from './assignment-binding-advanced/even/even.component';
import { OddComponent } from './assignment-binding-advanced/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    PropertyEventBindingComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent
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
