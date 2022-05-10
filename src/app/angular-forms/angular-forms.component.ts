import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {
  loginForm=new FormGroup({});
  submittedData: any;
  constructor() { }
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      userName: new FormControl(),
      password : new FormControl()
    });
  }
  submitForm():void{
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.userName);
    console.log(this.loginForm.value.password);

    this.submittedData = this.loginForm.value
  }
}
