import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../admin-service.service'

@Component({
  selector: 'app-websettings',
  templateUrl: './websettings.component.html',
  styleUrls: ['./websettings.component.css']
})
export class WebsettingsComponent implements OnInit {
websettings:any = [];
isNew=false;
webSettingsId:string;
model = {
  address:'',
  phoneNumber:null,
  email:'',
  aboutUs:'',
  ourMission:'',
  ourVission:'',
  shortId:''
}
 response:any = {
  message:'',
  result:"",
  err:'',
  status:null
}
  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.getwebsettingdetails()
    this.webSettingsId="";
  }

  getwebsettingdetails(){
   this.adminservice.getwebsettings().subscribe(data=>{
    this.websettings=data;
    this.webSettingsId="";
    console.log(data)
   })
  }
  addForm(){
    this.isNew=true;
  }
  back(){
    this.isNew=false;
    this.reset();

  }

  onSubmit(formdata){
    console.log('pavan')
if(this.webSettingsId){
console.log(this.webSettingsId)
this.adminservice.editwebsettings(this.model,this.webSettingsId).subscribe(data=>{
this.isNew=false;
this.reset();
this.getwebsettingdetails()
})
}else{
this.adminservice.createWebsettings(this.model).subscribe(data=>{
  this.response = data;
  if(this.response.status===200){
    this.isNew=false;
    this.reset()
    this.getwebsettingdetails()
  }
})
}
  }

  onEditClick(data){
   this.model.address=data.address
   this.model.phoneNumber=data.phoneNumber
   this.model.email=data.email
   this.model.aboutUs=data.aboutUs
   this.model.ourMission=data.ourMission
   this.model.ourVission=data.ourVission
   this.webSettingsId=data.shortId
   this.isNew=true;
   console.log(this.webSettingsId)
   console.log(data.shortId)

  }
  reset(){
    this.model.address=""
   this.model.phoneNumber=null
   this.model.email=""
   this.model.aboutUs=''
   this.model.ourMission=''
   this.model.ourVission=''
   this.webSettingsId=''

  }

}
