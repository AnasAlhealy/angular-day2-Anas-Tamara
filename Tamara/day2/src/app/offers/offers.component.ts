import { Component, OnInit } from '@angular/core';
import { BrowserModule, disableDebugTools } from '@angular/platform-browser';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
cars: Array<{model:string, color: string, yearOfProd: number, fuelType: string, image: string}> = [{
  model: "BMW",
  color: "White",
  yearOfProd: 2013,
  fuelType: "Diesel",
  image: "/assets/img/bmw.jpg"
},{
  model: "Tesla",
  color: "Gray",
  yearOfProd: 2020,
  fuelType: "Electric",
  image: "/assets/img/tesla.jpg"
},{
  model: "Audi",
  color: "Black",
  yearOfProd: 2016,
  fuelType: "Gas",
  image: "/assets/img/audi.jpg"
}]
  constructor() { }

  ngOnInit(): void {
  }

}
