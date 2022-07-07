import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelregComponent } from './travelreg/travelreg.component';
import { SearchplacesComponent } from './searchplaces/searchplaces.component';
import { ViewdestinationComponent } from './viewdestination/viewdestination.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelregComponent,
    SearchplacesComponent,
    ViewdestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
