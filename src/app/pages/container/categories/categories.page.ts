import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  public array:Array<any> =[0,1,2,3,4,5,6,7];
  public types = [
    "MEN",
    "WOMEN",
    "KIDS",
    "BEAUTY",
    "HOME",
    "ESSENTIALS",
    "JEWELLERY",
    "GADGETS",
  ];
  public colors:Array<string> = [
    "#E5E4E2",
    "#659EC7",
    "#95B9C7",
    "#FADBD8 ",
    "#D4EFDF",
    "#F5B7B1",
    "#E8DAEF ",
    "#F9E79F "
  ];
  constructor() { }

  ngOnInit() {
  }

}
