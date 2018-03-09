import { Injectable } from '@angular/core';

@Injectable()
export class PizzaMakerService {

  constructor() { }

  public getAvailablePizzaToppings() {
    return [
      "Extra Cheese"
      , "Sausage"
      , "Mushrooms"
      , "Green Peppers"
      , "Anchiovies"
      , "Jalapenos"
      , "Onions"
    ];
  }

}
