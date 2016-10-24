import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import Restaurant from '../shared/restaurant';
import Address from '../shared/address';
import Grade from '../shared/grade';
import RestaurantService from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {


  @Input()
  restaurant: Restaurant;


  constructor(public restaurantService: RestaurantService,
              public route: ActivatedRoute,
              public location: Location) { }

  ngOnInit(): void {
  }

}
