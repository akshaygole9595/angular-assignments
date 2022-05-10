import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({});
  invalidField = {
    border: '2px solid red'
  }
  validField = {
    border: '2px soild green'
  }
  strongpasswordPattern = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$";
  constructor() { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      emailId: new FormControl("", Validators.required),
      contactNumber: new FormControl("", Validators.required),
      userAge: new FormControl("", [Validators.required, Validators.min(16), Validators.max(55)]),
      userName: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9]{3,15}$")]),
      password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern(this.strongpasswordPattern)]),
      confirmPassword: new FormControl("", Validators.required)
    },
      { validators: this.passwordMatch }
    );
  }

  get age() {
    return this.registerForm.get('userAge');
  }

  get pass() {
    return this.registerForm.get('password');
  }

  get cpassword() {
    return this.registerForm.get('confirmPassword');
  }

  get name() {
    return this.registerForm.get('name')
  }

  get email() {
    return this.registerForm.get('emailId')
  }

  get contact() {
    return this.registerForm.get('contactNumber')
  }

  get username() {
    return this.registerForm.get('userName')
  }

  submitForm(): void {
    console.log(this.registerForm.value);
  }

  private passwordMatch(rForm: FormGroup): any {
    let pass = rForm.get('password').value;
    let cpass = rForm.get('confirmPassword').value;
    if (pass == cpass)
      return null; // validation passed
    else
      return { 'mismatch': true };
  }
}
