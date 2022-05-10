import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angulartraining';

  num1:number = 10
  num2: number = 12;
  addition:number = 22;
  addition2: any;

  num3: any;
  num4: any;



  changeHeading() {
    this.title = 'Angular Training'
  }

  add() {
    this.addition = this.num1 + this.num2
  }

  addNumbers(num1:any, num2:any) {
    num1.pars
    this.addition2 = parseInt(num1) + parseInt(num2) 
    }
}
