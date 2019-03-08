import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
declare var $;
@Component({
  selector: 'app-districts',
  templateUrl: './districts.component.html',
  styleUrls: ['./districts.component.css']
})
export class DistrictsComponent implements OnInit {

  constructor(private adminservice:AdminServiceService) { }
isNew= false;
isEdit:boolean
isNewopt=false
actBtn:string
submitBtn:string
allCountries:any=[];
selectedStates:any=[]

locationModel ={
  countryId:'',
  stateId:'',
  districtName:'',
  districtId:'',
}
statesByCountryId:any = []
allStates:any=[]
allDistricts:any=[]
  ngOnInit() {
    this.actBtn='Add New'
    this.submitBtn='Save'
    this.getAllCountries()
    this.getAllStates()
    this.getAllDistricts()
  }


  //this section is for getting all data
  getAllCountries(){
    this.adminservice.getAllCountries().subscribe(data=>{
     // console.log(data)
      this.allCountries = data;
      console.log(this.allCountries)
      
    })
  }
  getStatesByCountryId(){
    this.isNewopt=true
    console.log(this.locationModel)
    this.adminservice.getStatesByCountryId(this.locationModel.countryId).subscribe(data=>{
      this.selectedStates=data
     
      console.log(data)
    })      
  }

  
  getAllStates(){
    this.adminservice.getAllStates().subscribe(data=>{
      
      this.allStates = data;

      console.log('allstates', this.allStates)
      
    })
  }

  getAllDistricts(){
    this.adminservice.getAllDistricts().subscribe(data=>{
      this.allDistricts = data;
      for(let item2 of this.allDistricts){
        this.allCountries.find(cid=>{
          if(cid.countryId===item2.countryId){
            item2['countryName']=cid.countryName
          }
        })
        
   }
   for(let item2 of this.allDistricts){
    this.allStates.find(sid=>{
      // console.log('all states',sid.stateId,item2.stateId)

      if(sid.stateId===item2.stateId){

        item2['stateName']=sid.stateName
      }
    })
}
    })
  }





  ///save or update data

  sendForm(){
    if(this.submitBtn==='Save'){
      this.adminservice.saveDistricts(this.locationModel).subscribe(data=>{
        if(data['status']===200){
         this.reset()
        }
    })
    }else if(this.submitBtn==='Edit'){
      this.adminservice.editDistricts(this.locationModel).subscribe(data=>{
        if(data['status']===200){
         this.reset()
         this.actBtn='Add New'
         this.submitBtn='Save'

        }
    })
    }
    
  }

//Delete District


onDeleteBtn(districtId){
  $('#districtModal').modal('show')
  this.locationModel.districtId = districtId
}


confirmDelete(){
this.adminservice.deleteDistrict(this.locationModel.districtId).subscribe(data=>{
console.log(data)
if(data['status']===200){
  this.locationModel.districtId=''
  $('#districtModal').modal('hide')
this.reset()
}
})
}

cancelDelete(){
  $('#districtModal').modal('hide')

}

  //resetting data

  addNew(){
if(this.isNew){
  this.actBtn='Add New'
  this.isNew = false
  this.submitBtn='Save'
  this.reset()

}else{
  this.actBtn='Back'
  this.isNew = true

}

  }

reset(){
  this.locationModel.countryId='',
  this.locationModel.stateId='',
  this.locationModel.districtName=''
  this.locationModel.districtId=''
  this.isNew = false
  this.getAllDistricts()
}


onEditBtn(item){
  this.selectedStates=[]
  console.log('item',item)
  console.log('states by country id',this.allStates)
  this.actBtn='Back'
  this.submitBtn='Edit'
this.isNew = true;
this.locationModel.countryId = item.countryId
this.locationModel.stateId = item.stateId
this.locationModel.districtName = item.districtName
this.locationModel.districtId = item.districtId

for( let item2 of this.allStates){
  if(this.locationModel.countryId===item2.countryId){
    this.selectedStates.push(item2)
  }
}
}

}
