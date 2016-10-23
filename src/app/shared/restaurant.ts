import Address from './address';
import Grade from './grade';

export default class Restaurant {

  _id: string;
  name: string;
  cuisine: string;
  borough: string;
  address: Address;

  constructor(name: string, cuisine: string, borough: string, address: Address) {
    this.name = name;
    this.cuisine = cuisine;
    this.borough = borough;
    this.address = address;

  }
}
