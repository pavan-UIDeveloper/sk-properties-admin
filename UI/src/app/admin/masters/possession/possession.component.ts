import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-possession',
  templateUrl: './possession.component.html',
  styleUrls: ['./possession.component.css']
})
export class PossessionComponent implements OnInit {
  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getpossession()

  }
  isNew=false;
  menu:string;
  menuModel={
    possession:'',
    contentType:'possession'
  }
  menuId;
  possession:any = [];
  
  //Save
  
  clicksubmit(form){
    this.isNew=false
    this.menuModel.possession=this.menu;
    if(!this.menuId){
      this.adminservice.createpossession(this.menuModel).subscribe(data=>{
      console.log(data)
      this.getpossession()
      this.reset()

      })
    }else{
      this.adminservice.updatepossession(this.menuModel,this.menuId).subscribe(data=>{
  if(data){
    this.getpossession()
  this.reset()
  }
    })
  }
  
  }
  //get
  
  getpossession(){
    this.adminservice.getpossession().subscribe(data=>{
      console.log('age',data)
      this.possession=data;
  })
  }
  
  //Update
  
  menuupdate(data){
  this.isNew = true
  this.menu = data.possession;
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
