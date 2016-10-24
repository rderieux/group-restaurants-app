import { Component, OnInit } from '@angular/core';

import Restaurant from '../shared/restaurant';
import RestaurantService from '../restaurant.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {

  restaurants: Restaurant[];

  selectedRestaurant: Restaurant;

  constructor(public restaurantService: RestaurantService) {

  }

  ngOnInit() {
    this.restaurantService.getRestaurants()
      .then(result => this.restaurants = result)
  }

  onRestaurantSelected(restaurant:Restaurant) {
    this.selectedRestaurant = restaurant;
  }

  onClickCreate() {

  }

  onCloseClicked() {
    this.selectedRestaurant = null;
  }

}
