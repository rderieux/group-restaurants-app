import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import Restaurant from "../shared/restaurant";
import Address from "../shared/address";
import RestaurantService from "../restaurant.service";

@Component({
  selector: 'app-restaurant-create',
  templateUrl: './restaurant-create.component.html',
  styleUrls: ['./restaurant-create.component.css']
})
export class RestaurantCreateComponent implements OnInit {


  restaurant: Restaurant;

  constructor(public restaurantService: RestaurantService,
              public location: Location) {


      this.restaurant = new Restaurant("", "", "", new Address("", "", ""))

  }

  onCreate() {
    this.restaurantService.create(this.restaurant)
      .then(() => this.location.back())
  }

  ngOnInit() {
  }

}
