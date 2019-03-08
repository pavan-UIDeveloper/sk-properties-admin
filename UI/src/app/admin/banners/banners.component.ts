import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/admin-service.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
files:any=[];
urls=[]
image_preview:any=[]
actionBtn;
showBtn;
isNew=false;
bnnerModel = {
  bannerName:'',
  bannerId:''
}
  constructor(private adminservice:AdminServiceService) { }

  ngOnInit() {
    this.actionBtn='Save'
    this.showBtn = "Add New"
  }



  imageUpload(event){
    this.urls = [];

    this.files = event.target.files
    // console.log(files);


    // return false
    
    for(let file of this.files) {

    const reader = new FileReader();


    reader.onload = (e:any) => {
      console.log(e.target)
      this.urls.push(e.target.result);
    }

    reader.readAsDataURL(file)

  }

  console.log('URLS', this.urls);
  
}


sendForm(form){
  this.adminservice.uploadBannerImages(this.files).subscribe(data => {
    console.log(data);
    
  }) 
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
    this.image_preview=''
  }
}
