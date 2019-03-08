import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
declare var $
@Component({
  selector: 'app-villages',
  templateUrl: './villages.component.html',
  styleUrls: ['./villages.component.css']
})
export class VillagesComponent implements OnInit {
  isNew= false;
  isEdit:boolean
  isNewopt=false
  actBtn:string
  submitBtn:string
  allCountries:any=[];
  allMandals:any=[]
  locationModel ={
    countryId:'',
    stateId:'',
    districtId:'',
    mandalId:'',
    villageId:'',
    villageName:''
  }
  countryName:string
  auto:boolean
  statesByCountryId:any = []
  allStates:any=[]
  allDistricts:any=[]
  autoSugCountry:any =[]
  autoSugstates:any=[]
  selectedDistricts:any=[]
  selectedMandals:any=[]
  constructor(private adminservice:AdminServiceService) { }

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
    console.log(this.locationModel)
    this.adminservice.getStatesByCountryId(this.locationModel.countryId).subscribe(data=>{
      this.autoSugstates=data
     
      console.log(data)
    })      
  }


  getDistrictsByStateId(){
    console.log(this.locationModel)
    this.adminservice.getDistrictsByStateId(this.locationModel.stateId).subscribe(data=>{
      this.selectedDistricts=data
     
    })  
  }

  getmandalsByDistrictId(){
    console.log(this.locationModel)
    this.adminservice.getmandalsByDistrictId(this.locationModel.districtId).subscribe(data=>{
      this.selectedMandals=data
     
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
      this.getAllMandals()
    })
  }

  getAllMandals(){
    this.adminservice.getAllMandals().subscribe(data=>{
      this.allMandals = data;
      console.log('mandalss')
      console.log('allmandals',this.allMandals)
      for(let item of this.allMandals){
        this.allCountries.find(cid=>{
          if(cid.countryId===item.countryId){
            item['countryName']=cid.countryName
          }
        })
   
    this.allStates.find(sid=>{
      // console.log('all states',sid.stateId,item2.stateId)

      if(sid.stateId===item.stateId){

        item['stateName']=sid.stateName
      }
    })
    this.allDistricts.find(did=>{
      console.log('all manddddd',did.districtId,item.districtId)

      if(did.districtId===item.districtId){

        item['districtName']=did.districtName
      }
    })
    console.log('disisi',this.allMandals)

}
    })
  }

  getCountrySug(event){
    console.log(event.target.value.length)

    if(event.target.value.length===0){
      this.autoSugCountry=[]
        }
    if(event.target && event.target.value){
    this.adminservice.getcountryBykeyup(event.target.value).subscribe(data=>{
      console.log(data)
      if(data){
        this.autoSugCountry = data;
      }
     
      
    })
  }
  }

  autoSugClick(obj){
    this.autoSugCountry=[]
    this.locationModel.countryId=obj.countryId
    this.countryName=obj.countryName

    this.getStatesByCountryId()

  }

  ///save or update data

  sendForm(){
    if(this.submitBtn==='Save'){
      this.adminservice.saveMandals(this.locationModel).subscribe(data=>{
        if(data['status']===200){
         this.reset()
        }
    })
    }else if(this.submitBtn==='Edit'){
      this.adminservice.editMandals(this.locationModel).subscribe(data=>{
        if(data['status']===200){
          this.submitBtn='Save'
         this.reset()
        }
    })
    }
    
  }

//Delete District


onDeleteBtn(mandalId){
  $('#mandalModal').modal('show')
  this.locationModel.mandalId = mandalId
}


confirmDelete(){
this.adminservice.deleteMandal(this.locationModel.mandalId).subscribe(data=>{
console.log(data)
if(data['status']===200){
  this.locationModel.mandalId=''
  $('#mandalModal').modal('hide')
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
  this.locationModel.districtId=''
  this.locationModel.mandalId=''
  this.locationModel.villageName='',
  this.locationModel.villageId=''
  this.isNew = false
  this.actBtn='Add New'
  this.getAllDistricts()
}


onEditBtn(item){
  this.autoSugstates=[]
  this.selectedDistricts=[]
  console.log('item',item)
  console.log('states by country id',this.allStates)
  this.actBtn='Back'
  this.submitBtn='Edit'
this.isNew = true;
this.locationModel.countryId = item.countryId
this.countryName = item.countryName
this.locationModel.stateId = item.stateId
this.locationModel.districtId = item.districtId
this.locationModel.mandalId = item.mandalId
for( let item2 of this.allStates){
  if(this.locationModel.countryId===item2.countryId){
    this.autoSugstates.push(item2)
  }
}
for(let item of this.allDistricts){
if(this.locationModel.stateId===item.stateId){
  this.selectedDistricts.push(item) 

}
}
}
}
