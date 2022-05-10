import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.scss']
})
export class OrderByComponent implements OnInit {


  train = [
    {
      trainId: 112,
      trainType: "Passenger",
      trainRoute: "Mumbai - Kolkata",
      trainTicket: 4500,
      date: new Date()
    },
    {
      trainId: 111,
      trainType: "Express",
      trainRoute: "Chennai - Kolkata",
      trainTicket: 5000,
      date: new Date()
    },
    {
      trainId: 110,
      trainType: "Super Express",
      trainRoute: "Delhi - Kolkata",
      trainTicket: 7000,
      date: new Date()
    }
  ]


  colName = 'trainRoute'
  orderby = false;
  insensitive=true;
  constructor() { }

  ngOnInit(): void {
  }

  arraySort(property:string){
    this.colName=property;
    this.orderby = !this.orderby
  }

}
