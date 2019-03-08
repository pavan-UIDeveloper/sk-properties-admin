import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent implements OnInit {

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getamenities()
  }
  isNew=false;
  menu:string;
  menuModel={
    amenities:'',
    contentType:'amenities'
  }
  menuId;
  amenities:any = [];
  
  //Save
  
  clicksubmit(form){
    this.isNew=false
    this.menuModel.amenities=this.menu;
    if(!this.menuId){
      this.adminservice.createamenities(this.menuModel).subscribe(data=>{
      console.log(data)
      this.getamenities()
      })
    }else{
      this.adminservice.updateamenities(this.menuModel,this.menuId).subscribe(data=>{
  if(data){
    this.getamenities()
  this.reset()
  }
    })
  }
  
  }
  //get
  
  getamenities(){
    this.adminservice.getamenities().subscribe(data=>{
      console.log('age',data)
      this.amenities=data;
  })
  }
  
  //Update
  
  menuupdate(data){
  this.isNew = true
  this.menu = data.amenities;
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
