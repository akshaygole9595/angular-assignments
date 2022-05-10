import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  names = ['Akshay', 'Abhijeet', 'Shubham']
  books = [
    { id: 1, bName: "To the last bullet", price: 200 },
    { id: 2, bName: "Carver", price: 500 },
    { id: 3, bName: "Two States", price: 800 },
    { id: 4, bName: "What Young India Wants", price: 1200 },
    { id: 5, bName: "Revolution 2020", price: 600 },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
