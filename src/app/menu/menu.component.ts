import { Component, OnInit } from '@angular/core';


import { Dish } from '../shared/dish';

const DISHES : Dish[]= [
  {
    name: "Uthappizza",
    image:'/assets/images/uthappizza.png',
    category: 'mains',
    label:'Hot',
    price:'4.99',
    description:'A Unique combination of Indian Uthapizza',
},
{
  name: "Uthappizza1",
  image:'/assets/images/uthappizza1.png',
  category: 'mains',
  label:'Hot',
  price:'4.99',
  description:'A Unique combination of Indian Uthapizza',
},
{
name: "Buffet",
image:'/assets/images/buffet.png',
category: 'Appetizer',
label:'Hot',
price:'1.99',
description:'A Unique combination of Indian Uthapizza',
},
{
name: "Buffet1",
image:'/assets/images/buffet1.png',
category: 'mains',
label:'Hot',
price:'4.99',
description:'A Unique combination of Indian Uthapizza',
},

] ;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //dishes is an array of the Dish[]type
  dishes: Dish[] = DISHES;
  selectedDish: Dish = DISHES[0];
  constructor() { }

  ngOnInit() {
  }

}
