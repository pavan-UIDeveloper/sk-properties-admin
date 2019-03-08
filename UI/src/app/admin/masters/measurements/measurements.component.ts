import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getmeasurements()

  }
  isNew=false;
  menu:string;
  menuModel={
    measurements:'',
    contentType:'measurements'
  }
  menuId;
  measurements:any = [];
  
  //Save
  
  clicksubmit(form){
    this.isNew=false
    this.menuModel.measurements=this.menu;
    if(!this.menuId){
      this.adminservice.createmeasurements(this.menuModel).subscribe(data=>{
      console.log(data)
      this.getmeasurements()
      this.reset()

      })
    }else{
      this.adminservice.updatemeasurements(this.menuModel,this.menuId).subscribe(data=>{
  if(data){
    this.getmeasurements()
  this.reset()
  }
    })
  }
  
  }
  //get
  
  getmeasurements(){
    this.adminservice.getmeasurements().subscribe(data=>{
      console.log('age',data)
      this.measurements=data;
  })
  }
  
  //Update
  
  menuupdate(data){
  this.isNew = true
  this.menu = data.measurements;
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
