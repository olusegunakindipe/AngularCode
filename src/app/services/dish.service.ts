import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';

import { DISHES} from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Dish[] { //THIS MTHOD WILL RETURN AN ARRAY OF DISHES 
    return DISHES;
  }
}

//WITH THIS, THE DISH SERVICE IS NOW CONFIGURED TO
//SUPPLY THE DISHES JAVASCRIPT OBJECT ARRAY TO ANY
//PART OF THE APPLICATION THAT REQUIRES IT
