import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
httpOptions: any;
token: string
  url = 'http://localhost:3000/user'
  constructor(private http: HttpClient) { }
  
  
  passwordChange(passwordDetails) {

    this.token = localStorage.getItem('authToken');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.token
      })
    }


    let response = this.http.post(this.url + '/change-password', passwordDetails, this.httpOptions)
    return response;
  }
}