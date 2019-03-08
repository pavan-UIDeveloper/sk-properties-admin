import { Component, OnInit } from '@angular/core';
import {AdminServiceService} from '../admin-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:any;
  isPasswordChanged:boolean;
  token;
  responce:any={
    message:'',
        result:'',
        err:null,
        token:null,
        status:404
  }
  constructor(private router:Router,private service:AdminServiceService,private toastr: ToastrService) { }

  ngOnInit() {
    this.token=localStorage.getItem('authtoken')
    if(this.token){
      this.router.navigate(['/admin'])
    }
  }

  sendlogin(){
    let logindata={
      userName : this.userName,
      password:this.password
    }
    let responce= this.service.checklogin(logindata).subscribe((data=>{
      console.log(data);
      console.log(data)
      if(data){
       this.responce=data
       if(this.responce.status===200){
        
        localStorage.setItem('authtoken',this.responce.token)
        localStorage.setItem('username',this.responce.result.userName)
        localStorage.setItem('isPasswordChanged',this.responce.result.isPasswordChanged)
        console.log('login success')
        console.log(this.responce.result.isPasswordChanged)
        if(this.responce.result.isPasswordChanged===true){
          this.router.navigate(['/admin/websettings'])
        }else{
          this.router.navigate(['/admin/admin_management/changepassword'])

        }
        // this.router.navigate(['/admin'])
        this.toastr.success('success',this.responce.message)
        
       }else{
        console.log('login Fail')
        this.toastr.error('Fail',this.responce.message)

       }
      }
    }))
  }

}


