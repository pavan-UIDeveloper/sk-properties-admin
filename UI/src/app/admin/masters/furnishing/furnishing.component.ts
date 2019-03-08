import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-furnishing',
  templateUrl: './furnishing.component.html',
  styleUrls: ['./furnishing.component.css']
})
export class FurnishingComponent implements OnInit {

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getfurnishingStates()
  }
  isNew=false;
  menu:string;
  menuModel={
    furnishingStates:'',
    contentType:'furnishingStates'
  }
  menuId;
  furnishingStates:any = [];
  
  //Save
  
  clicksubmit(form){
    this.isNew=false
    this.menuModel.furnishingStates=this.menu;
    if(!this.menuId){
      this.adminservice.createfurnishingStates(this.menuModel).subscribe(data=>{
      console.log(data)
      this.getfurnishingStates()
      this.reset()

      })
    }else{
      this.adminservice.updatefurnishingStates(this.menuModel,this.menuId).subscribe(data=>{
  if(data){
    this.getfurnishingStates()
  this.reset()
  }
    })
  }
  
  }
  //get
  
  getfurnishingStates(){
    this.adminservice.getfurnishingStates().subscribe(data=>{
      console.log('age',data)
      this.furnishingStates=data;
  })
  }
  
  //Update
  
  menuupdate(data){
  this.isNew = true
  this.menu = data.furnishingStates;
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
