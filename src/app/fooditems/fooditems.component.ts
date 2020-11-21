import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Fooditems } from 'src/app/fooditems';

@Component({
  selector: 'app-fooditems',
  templateUrl: './fooditems.component.html',
  styleUrls: ['./fooditems.component.css']
})
export class FooditemsComponent implements OnInit {

  food:Fooditems;
  items: string[];
  quantity:number[];
  prize=200;
  
  foodForm = new FormGroup({
    customerName: new FormControl(),  
    selectedFoodItem: new FormControl(),
    selectedVariety: new FormControl(),
    selectedQuantity: new FormControl()
   });
    constructor() { 
      this.food = new Fooditems();
    }
  
    ngOnInit() {
    this.items = ["FarmFreshPizza","Veg-CheeseBurger","AlooTikkiCheeseBurger","VegiDelightPizza","OverloadedCheesePizza"];
    this.quantity = [1,2,3,4,5,6,7,8,9,10];
    }
  
    doProcess(){
      this.food.customerName = this.foodForm.get('customerName').value;
      this.food.selectedFoodItem = this.foodForm.get('selectedFoodItem').value;
      this.food.selectedVariety = this.foodForm.get('selectedVariety').value;
      this.food.selectedQuantity = this.foodForm.get('selectedQuantity').value;
     alert("Hello, "+this.food.customerName
     +" , selected Food Item: "+this.food.selectedVariety
     +", given quantity: "+this.food.selectedQuantity
     +" and the prize is "+ this.food.selectedQuantity * this.prize);
    }
  

}
