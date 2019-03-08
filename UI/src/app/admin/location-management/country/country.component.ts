import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'
declare var $;
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  constructor(private adminservice:AdminServiceService) { }
  ngOnInit() {
    this.getAllCountries();
    this.actionBtn='Save'
    this.showBtn = "Add New"
  }
  countryId=''
  isNew = false;
  locationModel={
  countryName:'',
  countryId:'',
  contentType:'country'
}
allCountries:any =[];
actionBtn :string
showBtn : string
currentPage=1;
pageSize=5;
pages = []
totalPages;
noOfItems = [1,5,10,15];
noOfItemsvar:number;
image_preview;
file:any;
sendForm(form){
  console.log('compfile',this.file)
  if(this.actionBtn==='Save'){
this.adminservice.saveCountry(this.file,this.locationModel).subscribe(data=>{
  console.log('service',data)
  if(data){
    this.getAllCountries()
    this.isNew=false,
    this.showBtn = 'Add New'
    this.image_preview=''
    form.reset()
  }
})
}else if(this.actionBtn==='Update'){
this.adminservice.editCountry(this.file,this.locationModel).subscribe(data=>{
if(data){
  this.pages=[];
  this.isNew=false,
  this.getAllCountries()
  this.showBtn = 'Add New'
  this.actionBtn='Save'
}
})
}
}

imageUpload(event){
  console.log(event.target.files)
  this.file = event.target.files[0]


  const reader = new FileReader()

  reader.onload=()=>{
    this.image_preview = reader.result
  }

  

  reader.readAsDataURL(this.file)
  console.log(reader)
}


getAllCountries(){
  
  this.adminservice.getAllCountriespagenation(this.currentPage,this.pageSize).subscribe(data=>{
    console.log(data)
    this.allCountries = data['result'];
    let totalrecords = data['totalPages']
    this.totalPages = data['totalPages']

    for(let i=1;i<=totalrecords;i++){
      this.pages.push(i)
    }
  })
}

currentpage(page){
  this.pages=[];
this.currentPage=page;
this.getAllCountries();
}
noOfItemsPerPage(){
  this.pages=[];
this.pageSize=this.noOfItemsvar;
this.getAllCountries();
}

nextPage(){
  this.pages=[];
  if(this.currentPage!=this.totalPages){
  this.currentPage++
}
  this.getAllCountries();
}

previousPage(){
  this.pages=[];
  if(this.currentPage!=1){
  this.currentPage--
}
  this.getAllCountries();


}


onEditCountry(item){
  console.log(item)
  this.isNew =true
  this.actionBtn='Update'
  this.locationModel.countryName =item.countryName,
  this.locationModel.countryId =item.countryId,
  this.showBtn = 'Back'
  this.image_preview = item.image
}

onDeleteCountry(countryId){
  this.pages=[];
  $('#deleteModel').modal('show')
  this.countryId= countryId;
}

deletecountry(){
  console.log(this.countryId)
this.adminservice.deleteCountryById(this.countryId).subscribe(result=>{
console.log(result)
if(result){
  $('#deleteModel').modal('hide')
  this.countryId= '';
  this.getAllCountries();
}
})
}

cancelcountry(){
  $('#deleteModel').modal('hide')
  this.countryId= '';

}

addNew(){
  if(this.isNew){
    this.showBtn = 'Add New'
    this.actionBtn='Update'
  }else{
    this.showBtn = 'Back'
    this.actionBtn='Save'
  }
    this.isNew = !this.isNew
    this.locationModel.countryName=''
    this.image_preview=''
  }


}
