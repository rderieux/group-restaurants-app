import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import Restaurant from './shared/restaurant';

import 'rxjs/add/operator/toPromise';

const RESTAURANTS_URL = 'https://helio-restaurants.mod.bz';

@Injectable()
export default class RestaurantService {

  constructor(public http: Http) {}

    getRestaurants(): Promise<Restaurant[]> {
      return this.http
        .get(RESTAURANTS_URL)
        .toPromise()
        .then(resp => {
          return resp.json()
            .map(restaurant => new Restaurant(restaurant.name, restaurant.description))
        });

  }

    getRestaurant(name): Promise<Restaurant> {
      return this.getRestaurants().then(restaurants => {
        return restaurants.filter(restaurant => restaurant.name.toLowerCase() === name.toLowerCase())
          .reduce((prev, current) => {
            return current;
          }, {})
      })
    }
}

