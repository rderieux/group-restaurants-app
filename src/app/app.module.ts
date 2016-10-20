import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import Restaurant from './shared/restaurant';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import RestaurantService from "./restaurant.service";

@NgModule({
  declarations: [
    AppComponent,
    // Restaurant,
    RestaurantsListComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
