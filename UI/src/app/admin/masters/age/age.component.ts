import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getage()
  }
isNew=false;
menu:string;
menuModel={
  age:'',
  contentType:'age'
}
menuId;
age:any = [];

//Save

clicksubmit(form){
  this.isNew=false
  this.menuModel.age=this.menu;
  if(!this.menuId){
    this.adminservice.createage(this.menuModel).subscribe(data=>{
    console.log(data)
    this.getage()
    })
  }else{
    this.adminservice.updateage(this.menuModel,this.menuId).subscribe(data=>{
if(data){
  this.getage()
this.reset()
}
  })
}

}
//get

getage(){
  this.adminservice.getage().subscribe(data=>{
    console.log('age',data)
    this.age=data;
})
}

//Update

menuupdate(data){
this.isNew = true
this.menu = data.age;
this.menuId = data.menuId;
}

  addtypeclick(){
    this.isNew=!this.isNew;
  }
reset(){
  this.menu='';
  this.menuId=''
}
}
