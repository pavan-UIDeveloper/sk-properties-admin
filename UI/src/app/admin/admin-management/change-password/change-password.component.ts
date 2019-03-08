import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../../../admin-service.service'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
formdata;
  constructor(private adminser:AdminServiceService) { }

  ngOnInit() {
  }

  onSubmit(form){
    form.value['userName']=localStorage.getItem('username');
    this.formdata=form.value
    console.log(this.formdata)
   this.adminser.changepassword(this.formdata).subscribe(data=>{

   })
  }

}
