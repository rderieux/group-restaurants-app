export default class Address {
  building: string;
  street: string;
  zipcode: string;

  constructor(building: string, street: string, zipcode: string) {
    this.building = building;
    this.street = street;
    this.zipcode = zipcode;
  }
}
