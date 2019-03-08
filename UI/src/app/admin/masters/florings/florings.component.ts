import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-florings',
  templateUrl: './florings.component.html',
  styleUrls: ['./florings.component.css']
})
export class FloringsComponent implements OnInit {

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getflorings()
  }

  isNew=false;
  menu:string;
  menuModel={
    floorings:'',
    contentType:'floorings'
  }
  menuId;
  floorings:any = [];
  
  //Save
  
  clicksubmit(form){
    this.isNew=false
    this.menuModel.floorings=this.menu;
    if(!this.menuId){
      this.adminservice.createflorings(this.menuModel).subscribe(data=>{
      console.log(data)
      this.getflorings()
      })
    }else{
      this.adminservice.updateflorings(this.menuModel,this.menuId).subscribe(data=>{
  if(data){
    this.getflorings()
  this.reset()
  }
    })
  }
  
  }
  //get
  
  getflorings(){
    this.adminservice.getflorings().subscribe(data=>{
      console.log('age',data)
      this.floorings=data;
  })
  }
  
  //Update
  
  menuupdate(data){
  this.isNew = true
  this.menu = data.floorings;
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
