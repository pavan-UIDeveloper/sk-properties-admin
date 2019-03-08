import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //  let isPasswordChanged = JSON.parse(localStorage.getItem('isPasswordChanged'))
console.log(localStorage.getItem('isPasswordChanged'));
  }


}
