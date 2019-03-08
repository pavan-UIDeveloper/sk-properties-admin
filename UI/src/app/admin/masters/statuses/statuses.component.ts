import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-statuses',
  templateUrl: './statuses.component.html',
  styleUrls: ['./statuses.component.css']
})
export class StatusesComponent implements OnInit {
  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getstatuses()

  }
  isNew=false;
  menu:string;
  menuModel={
    statuses:'',
    contentType:'statuses'
  }
  menuId;
  statuses:any = [];
  
  //Save
  
  clicksubmit(form){
    this.isNew=false
    this.menuModel.statuses=this.menu;
    if(!this.menuId){
      this.adminservice.createstatuses(this.menuModel).subscribe(data=>{
      console.log(data)
      this.getstatuses()
      this.reset()

      })
    }else{
      this.adminservice.updatestatuses(this.menuModel,this.menuId).subscribe(data=>{
  if(data){
    this.getstatuses()
  this.reset()
  }
    })
  }
  
  }
  //get
  
  getstatuses(){
    this.adminservice.getstatuses().subscribe(data=>{
      console.log('age',data)
      this.statuses=data;
  })
  }
  
  //Update
  
  menuupdate(data){
  this.isNew = true
  this.menu = data.statuses;
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
