import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import RestaurantService from "./restaurant.service";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'restaurants',
        component: RestaurantsListComponent
      },
      {
        path: 'restaurants/:id',
        component: RestaurantDetailComponent
      },
      {
        path: '',
        redirectTo: '/restaurants',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
