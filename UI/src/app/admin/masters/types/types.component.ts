import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
isNew:boolean;
types:string;
typeModel={
  type:'',
  contentType:'propertyType'
}
typeID;
typesarray:any=[];
  constructor(private adminervices:AdminServiceService) { }

  ngOnInit() {
    this.isNew = false;
    this.gettingtypes();
  }

  addtypeclick(){
    this.isNew=!this.isNew;
  }

  typesclicksubmit(form){
    this.typeModel.type=this.types;
console.log(this.typeID)
    if(!this.typeID){
    this.adminervices.createtypes(this.typeModel).subscribe(data=>{
      console.log(data);
      this.gettingtypes();
    })
  }else{
    this.adminervices.typeupdate(this.typeModel,this.typeID).subscribe(data=>{
      console.log(data)
      if(data){
      this.reset()
      this.gettingtypes();

    }
          })
        }
  }
  gettingtypes(){
    this.adminervices.gettypes(this.typeModel).subscribe(data=>{
      console.log(data)
      this.typesarray = data;
      console.log(this.typesarray)
    })
  }
  typeupdate(data){
    this.isNew=true;
    this.types=data.type;
    this.typeID=data.typeId
    console.log(this.typeID)
    
  }

  reset(){
    this.types='';
    this.isNew=false
    this.typeID=''
  }
}
