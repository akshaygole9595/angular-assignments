import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  maths: any
  physics: any
  chemistry: any

  totalMarks: any
  percentage: any

  constructor() { }

  ngOnInit(): void {
  }

  getResult() {
  this.totalMarks =   parseInt(this.maths) + parseInt(this.physics) + parseInt(this.chemistry)

  console.log(this.totalMarks)
  this.percentage = this.totalMarks / 3

  console.log(this.percentage)
  }
}
