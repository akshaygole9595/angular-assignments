import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  fieldType = "password"
  constructor() { }

  ngOnInit(): void {
  }

  changeFieldType(type: string) {

    if(type == "text") {
      this.fieldType = "text"
    } else {
      this.fieldType = "password"
    }
  }

}
