import { Component, OnInit } from '@angular/core';

import {PizzaMakerService } from '../pizza-maker.service';


interface pizzaToppings {
  name: string;
  checked: boolean;
}
@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.css']
})
export class PizzaMakerComponent implements OnInit {

  constructor(private pizzaToppings: PizzaMakerService) { }
  
  public pizzaMaker: pizzaToppings[];

  ngOnInit() {
    this.pizzaMaker = this.pizzaToppings.getAvailablePizzaToppings()
  	.map(x => ({name: x, checked: false}));
  }

}

  
