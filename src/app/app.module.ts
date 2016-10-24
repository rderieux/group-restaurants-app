import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import RestaurantService from "./restaurant.service";
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { RestaurantDeleteComponent } from './restaurant-delete/restaurant-delete.component';
import { RestaurantsTopRatedComponent } from './restaurants-top-rated/restaurants-top-rated.component';
import { RestaurantsFavoritesComponent } from './restaurants-favorites/restaurants-favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsListComponent,
    RestaurantDetailComponent,
    RestaurantCreateComponent,
    RestaurantDeleteComponent,
    RestaurantsTopRatedComponent,
    RestaurantsFavoritesComponent
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
        path: 'restaurants/top-rated',
        component: RestaurantsTopRatedComponent
      },
      {
        path: 'restaurants/favorites',
        component: RestaurantsFavoritesComponent
      },
      {
        path: 'restaurants/create',
        component: RestaurantCreateComponent
      },
      {
        path: 'restaurants/delete',
        component: RestaurantDeleteComponent
      },
      {
        path: 'restaurants/:id',
        component: RestaurantDetailComponent
      },
      {
        path: '',
        redirectTo: 'restaurants',
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
