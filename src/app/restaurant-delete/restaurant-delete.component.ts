import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import Restaurant from "../shared/restaurant";
import RestaurantService from "../restaurant.service";

@Component({
  selector: 'app-restaurant-delete',
  templateUrl: './restaurant-delete.component.html',
  styleUrls: ['./restaurant-delete.component.css']
})
export class RestaurantDeleteComponent implements OnInit {

  restaurant: Restaurant;


  constructor(public restaurantService: RestaurantService,
              public location: Location) {

  }

  onDelete(restaurant: Restaurant): void {
    this.restaurantService.deleteRestaurant(restaurant)
      .then(() => this.location.back())
  }

  ngOnInit() {
  }

}
