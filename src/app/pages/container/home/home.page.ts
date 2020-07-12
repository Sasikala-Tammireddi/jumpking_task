import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public slideArray: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7];
  public categories: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  public bags = [
    "MEN",
    "WOMEN",
    "KIDS",
    "BEAUTY",
    "HOME",
    "ESSENTIALS",
    "JEWELLERY",
    "GADGETS",
    "FURNISHING",
  ];
  public slideOpts = {
    slidesPerView: 4.8,
    spaceBetween: 0,
  };
  public slideOptions = {
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerGroup: 1,
    watchSlidesProgress: true,
    spaceBetween: 0,
    autoplay: {
      delay: 1000,
    },
  };
  
  public slideOption = {
    slidesPerView: 1.8,
    spaceBetween: 10,
  };
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
  constructor() {}

  ngOnInit() {}
}
