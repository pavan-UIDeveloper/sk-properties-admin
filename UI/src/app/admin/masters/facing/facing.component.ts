import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-facing',
  templateUrl: './facing.component.html',
  styleUrls: ['./facing.component.css']
})
export class FacingComponent implements OnInit {

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getfacing()

  }
  isNew=false;
  menu:string;
  menuModel={
    facing:'',
    contentType:'facing'
  }
  menuId;
  facing:any = [];
  
  //Save
  
  clicksubmit(form){
    this.isNew=false
    this.menuModel.facing=this.menu;
    if(!this.menuId){
      this.adminservice.createfacing(this.menuModel).subscribe(data=>{
      console.log(data)
      this.getfacing()
      })
    }else{
      this.adminservice.updatefacing(this.menuModel,this.menuId).subscribe(data=>{
  if(data){
    this.getfacing()
  this.reset()
  }
    })
  }
  
  }
  //get
  
  getfacing(){
    this.adminservice.getfacing().subscribe(data=>{
      console.log('age',data)
      this.facing=data;
  })
  }
  
  //Update
  
  menuupdate(data){
  this.isNew = true
  this.menu = data.facing;
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
