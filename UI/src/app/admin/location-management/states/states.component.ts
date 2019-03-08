import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
import { resetComponentState } from '@angular/core/src/render3/state';
declare var $
@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
 
 //variable decleration part
  isNew = false;
  allCountries:any=[];
  locationModel:any = {
    stateName:'',
    countryId:'',
    stateId:''
  }
  allStates:any = [];
  actBtn:string
  submitBtn:string
  stateId:string
  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.actBtn='Add New'
    this.submitBtn='Save'
    this.getAllCountries()
    this.getAllStates()
  }



  //get methods Part
  
  getAllCountries(){
this.adminservice.getAllCountries().subscribe(data=>{
  if(data){
    console.log('aaaaaaaaaaaaaaa',data)
this.allCountries = data;
  }
})
  }
getAllStates(){
this.adminservice.getAllStates().subscribe(data=>{
console.log(data)
this.allStates = data;
if(data)
for(let item2 of this.allStates){
this.allCountries.find(cid=>{
  if(cid.countryId===item2.countryId){
    item2['countryName']=cid.countryName
  }
})
        }
  })
console.log(this.allStates)
  
  }



  //save or Edit PArt

sendForm(form){
    console.log(this.locationModel)
    if(this.submitBtn==='Save'){
      this.adminservice.savestates(this.locationModel).subscribe(data=>{
        if(data){
          this.reset()
          this.actBtn = 'Add New'

        }
      })
    }else if(this.submitBtn==='Update'){
      this.adminservice.editstates(this.locationModel).subscribe(data=>{
        if(data['status']===200){
          this.reset()
          this.actBtn = 'Add New'
        }
      })
    }
   
  }


//form data populating form resetting PArt

  addNew(){
    this.isNew = !this.isNew;
    if(this.isNew){
      this.actBtn='Back'
    }else{
      this.actBtn='Add New'
    }
    this.locationModel.stateName=''
    this.locationModel.countryId =''
    this.submitBtn='Save'
  }

  reset(){
  this.locationModel.stateName='';
  this.locationModel.countryName='';
  this.getAllStates()
  this.isNew = !this.isNew;
  }

  editStateBtn(item){
    console.log(item)
    this.isNew = true;
    this.locationModel.stateName=item.stateName
    this.locationModel.countryId = item.countryId
    this.locationModel.stateId = item.stateId
    this.actBtn='Back'
    this.submitBtn='Update'

  }


  //modal displaying
  onDeleteBtn(stateId){
  $('#stateModal').modal('show')
  this.stateId = stateId
}

confirmDelete(){
this.adminservice.deleteState(this.stateId).subscribe(data=>{
  if(data['status']===200){
    $('#stateModal').modal('hide')
    this.stateId = ''
    this.getAllStates()
  }
})
}
cancelDelete(){
  $('#stateModal').modal('hide')
  this.stateId = ''

}

}

