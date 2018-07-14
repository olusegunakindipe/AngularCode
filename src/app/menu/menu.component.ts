import { Component, OnInit } from '@angular/core';


import { Dish } from '../shared/dish';

import { DishService} from '../services/dish.service';
//this uses the dishservices to fetch information and make it available
//for the components to make use of
@Component(
  {
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //dishes is a variable of an array of the Dish[]type
  dishes: Dish[];
  selectedDish: Dish ;

  constructor(private dishService: DishService) { }

  ngOnInit() {//this allows the service to fetch the information
    this.dishes = this.dishService.getDishes();
  }
  onSelect(dish: Dish){
    this.selectedDish= dish;
  }

}
