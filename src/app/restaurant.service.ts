import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule } from '@angular/router';

import Restaurant from './shared/restaurant';
import Address from './shared/address';
//import Grade from './shared/grade';

import 'rxjs/add/operator/toPromise';

const RESTAURANTS_URL = 'https://helio-restaurants.mod.bz/v1/restaurants';

@Injectable()
export default class RestaurantService {

  constructor(public http: Http) {}

    getRestaurants(): Promise<Restaurant[]> {
      return this.http
        .get(RESTAURANTS_URL)
        .toPromise()
        .then(resp => {
          const currentRestaurant = resp.json();
          return currentRestaurant
            .map(restaurant => {
              var address = new Address("", "", "");
              if(restaurant.address) {
                address = new Address(restaurant.address.building, restaurant.address.street, restaurant.address.zipcode);
              }
              return new Restaurant(restaurant.name, restaurant.cuisine, restaurant.borough, address)
            })

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

    // getTopRated(query): Promise<Restaurant> {
    //   return this.getRestaurants
    //
    //
    // }

  create(restaurant: Restaurant): Promise<Restaurant> {
    return this.http.post(RESTAURANTS_URL, restaurant)
      .toPromise()
      .then(res => res.json())
  }

  deleteRestaurant(restaurant: Restaurant): Promise<void> {
    // const url = `${this.restaurant}/${id}`;
    return this.http.delete(RESTAURANTS_URL, restaurant)
      .toPromise()
      .then(res => null())
  }
}

