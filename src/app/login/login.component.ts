import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  countryName: string;
  countryCode: string;
  countryLang: string;
  isLogin: boolean;
  token: string;

 reponse: any = {
  message: '',
  result: {},
  status: null,
  token: '',
  error: null
}
  

  constructor(private userService: UserService, 
    private router: Router,
      private toastr: ToastrService) { }

  ngOnInit() {

    this.token = localStorage.getItem('authToken')

    if(this.token) {
      this.isLogin = false;

    } else {
      this.isLogin = true;
    }
  
  }

  
  onSubmit(form) {

   

    this.userService.login(form.value).subscribe(data => {

      // console.log(data)
this.reponse = data;
if(this.reponse && this.reponse !== undefined) {

  if(this.reponse.status === 200) {

    localStorage.setItem('authToken', this.reponse.token)
    localStorage.setItem('userName', this.reponse.result.userName)
    console.log(this.reponse)
    console.log(this.reponse.token)
this.toastr.success('Success', this.reponse.message)
this.router.navigate(['/admin'])
  } else if(this.reponse.status === 404) {
    console.log(this.reponse.message)
    this.toastr.error('Failure', this.reponse.message)

  }
}
      

     
    
  }, error => {
    console.log(error.error);

    })

  }

  onCountrySave() {

    let countryDetails = {
      countryName: this.countryName,
      countryCode: this.countryCode,
      countryLanguage: this.countryLang
    }

    this.userService.saveContry(countryDetails).subscribe(data => {
    console.log(data)

    this.reponse = data;

    if(this.reponse.status === 200) {
        console.log(this.reponse.message);
        
    
    } else if(this.reponse.status === 404) {
      console.log(this.reponse.message);


    }
    
    
    })
  }


  

  

}
