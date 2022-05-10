import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {


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

  constructor() { }

  ngOnInit(): void {
  }

}
