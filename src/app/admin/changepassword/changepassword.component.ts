import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  onSubmit(form) {
console.log(form.value);

form.value['userName']= localStorage.getItem('userName')

console.log(form.value);

if(form.value.newPassword === form.value.confirmPassword) {

  this.adminService.passwordChange(form.value).subscribe(data => {
  
    console.log(data);
  })
} else {
  console.log('New password and confirm password are not matching');
  
}




  }

}
