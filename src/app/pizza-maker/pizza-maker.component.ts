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
  public pieOrder = '';
  public orderNumber = '';

  ngOnInit() {
    this.unCheckAll();
  }

  checkAll(){
    this.pizzaMaker = this.pizzaToppings.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: true }));
  }

  unCheckAll(){
    this.pizzaMaker = this.pizzaToppings.getAvailablePizzaToppings()
      .map(x => ({ name: x, checked: false }));
  }


  orderPie() {
    let selected = this.pizzaMaker.filter(x => x.checked == true);
    if (selected.length > 0) {
      this.pieOrder = "You ordered: ";
      selected.forEach(x => this.pieOrder += x.name + ', ');
      this.pieOrder = this.pieOrder.slice(0, -2) + "!";
    } else {
      this.pieOrder = '';
    }
  }
  }


  
