import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-parkings',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getparkings()
  }
  isNew=false;
  menu:string;
  menuModel={
    parkings:'',
    contentType:'parkings'
  }
  menuId;
  parkings:any = [];
  
  //Save
  
  clicksubmit(form){
    this.isNew=false
    this.menuModel.parkings=this.menu;
    if(!this.menuId){
      this.adminservice.createparkings(this.menuModel).subscribe(data=>{
      console.log(data)
      this.getparkings()
      this.reset()

      })
    }else{
      this.adminservice.updateparkings(this.menuModel,this.menuId).subscribe(data=>{
  if(data){
    this.getparkings()
  this.reset()
  }
    })
  }
  
  }
  //get
  
  getparkings(){
    this.adminservice.getparkings().subscribe(data=>{
      console.log('age',data)
      this.parkings=data;
  })
  }
  
  //Update
  
  menuupdate(data){
  this.isNew = true
  this.menu = data.parkings;
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
