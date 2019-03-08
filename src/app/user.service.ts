import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
token: string;
httpOptions: any;
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) { }


  login(userDetails) {

    let response = this.http.post(this.url + '/login', userDetails)
    return response
  }

  saveContry(countryDetails) {

this.token = localStorage.getItem('authToken');

this.httpOptions = {

  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
  })
}
    let response = this.http.post(this.url + '/save-countries', countryDetails, this.httpOptions)
    return response
  }
}
