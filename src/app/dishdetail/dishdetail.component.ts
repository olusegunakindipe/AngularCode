import { Component, OnInit, Input } from '@angular/core';
//Input is used to supply information from a component
//to another component
 import {Dish} from '../shared/dish'; //get input from Dish class


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  @Input()
  dish = Dish;//dish is of the type string
  constructor() { }

  ngOnInit() {
  }

}
