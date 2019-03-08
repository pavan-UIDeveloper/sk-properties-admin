import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = 'http://localhost:3000/user'
  httpOptions: any;
  authToken: string;
  constructor(private http: HttpClient) { }






}




































  // login(userDetials) {
  //   let response = this.http.post(this.url + '/login', userDetials)
  //   return response;
  // }

  // sendCountryDetails(countryDetails) {
  //   this.authToken = localStorage.getItem('authToken');

    
  //   this.httpOptions = {
  //     headers : new HttpHeaders({
  //       'Authorization': this.authToken
  //     })
  //   }
  //   let response = this.http.post(this.url + '/save-countries', countryDetails, this.httpOptions)
  //   return response
  // }

