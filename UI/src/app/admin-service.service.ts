import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
token;
httpOptions;
url="http://localhost:3000/";
  constructor(private http:HttpClient) { }

  
 
  checklogin(checklogin){
    let responce =   this.http.post(this.url+'person/login',checklogin)
   return responce;
    }
    changepassword(formdata){
      let responce =   this.http.post('http://localhost:3000/person/change-password',formdata)
     return responce;
      }
      
      
      getwebsettings(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token
        })
      }
        let responce=this.http.get('http://localhost:3000/websettings/get-websettings',this.httpOptions)
        return responce;
      }
      createWebsettings(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post('http://localhost:3000/websettings/create',model,this.httpOptions)
        return responce;
      }
      editwebsettings(model,id){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put('http://localhost:3000/websettings/update-websettings-byid/'+id,model,this.httpOptions)
        return responce;
      }
      createtypes(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }     

      createage(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }

      createamenities(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }
      createfacing(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }

      createflorings(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }
      createfurnishingStates(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }
      createmeasurements(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }
      createparkings(model){
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }
      createpossession(model){
        console.log(model)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }
      createstatuses(model){
        console.log(model)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.post(this.url+'masters/',model,this.httpOptions)
        return responce;
      }







      gettypes(model){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=propertytype',this.httpOptions,)
        return responce;
      }

      getage(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=age',this.httpOptions,)
        return responce;
      
      }
      getamenities(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=amenities',this.httpOptions,)
        return responce;
      
      }
      getfacing(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=facing',this.httpOptions,)
        return responce;
      
      }
      getflorings(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=floorings',this.httpOptions,)
        return responce;
      
      }
      getfurnishingStates(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=furnishingStates',this.httpOptions,)
        return responce;
      
      }
      getmeasurements(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=measurements',this.httpOptions,)
        return responce;
      
      }
      getparkings(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=parkings',this.httpOptions,)
        return responce;
      
      }
      getpossession(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=possession',this.httpOptions,)
        return responce;
      
      }
      getstatuses(){
        this.token = localStorage.getItem('authtoken')
      this.httpOptions = {
        headers: new HttpHeaders({
          'authorization':this.token,
        })
      }
        let responce=this.http.get(this.url+'masters?type=statuses',this.httpOptions,)
        return responce;
      
      }

      uploadBannerImages(files){
        let postData = new FormData()
        for(let i=0;i<files.length;i++){
          let splitData = files[i]['name'].split('.')[0]
          postData.append('bannerImage',files[i],splitData)
        }


        let responce=this.http.post(this.url+'banners',postData)
        return responce
      }






      typeupdate(data,id){
        console.log(id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }

      

      updateage(data,id){
        console.log(id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }
      updateamenities(data,id){
        console.log(id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }
      updatefacing(data,id){
        console.log(id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }
      updateflorings(data,id){
        console.log(id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }
      updatefurnishingStates(data,id){
        console.log(id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }
      updatemeasurements(data,id){
        console.log(id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }
      updateparkings(data,id){
        console.log('park',id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }
      updatepossession(data,id){
        console.log('park',id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }
      updatestatuses(data,id){
        console.log('park',id)
        this.token = localStorage.getItem('authtoken')
        this.httpOptions = {
          headers: new HttpHeaders({
            'authorization':this.token
          })
        }
        let responce = this.http.put(this.url+'masters/'+id,data,this.httpOptions)
        return responce;
      }



/////location Management CRUD



  saveCountry(file:File,model){
    console.log('file',file)
    this.token = localStorage.getItem('authtoken')
    this.httpOptions = {
      headers: new HttpHeaders({
        'autherization':this.token
      })
    }
    let postData = new FormData()
    postData.append('country_flag',file,model.countryName)
    postData.append('countryName',model.countryName)
    postData.append('contentType',model.contentType)

   

 let responce =  this.http.post(this.url+'location-management/',postData)
 return responce;
  }
  
  savestates(model){
    console.log(model)
    console.log('pavan')
    // this.token = localStorage.getItem('authtoken')
    // this.httpOptions = {
    //   headers: new HttpHeaders({
    //     'autherization':this.token
    //   })
    // }
 let responce =  this.http.post(this.url+'location-management/save_states',model)
 return responce;
  }

  saveDistricts(model){
    let responce =  this.http.post(this.url+'location-management/save_districts',model)
 return responce;
  }


getAllCountriespagenation(currentpage,pageSize){
  let obj = {
    type:'country'
  }
  this.token = localStorage.getItem('authtoken')
  this.httpOptions = {
    headers: new HttpHeaders({
      'autherization':this.token
    })
  }
  let backQuery = `?type=countrys&currentPage=${currentpage}&pageSize=${pageSize}`
  let responce =  this.http.get(this.url+'location-management'+backQuery)
return responce;
}
  getAllCountries(){
    let obj = {
      type:'country'
    }
    this.token = localStorage.getItem('authtoken')
    this.httpOptions = {
      headers: new HttpHeaders({
        'autherization':this.token
      })
    }

let responce =  this.http.get(this.url+'location-management?type=country')
return responce;
}


editCountry(file:File,model){
  console.log(model)
  let postData = new FormData()
  postData.append('country_flag',file,model.countryName)
  postData.append('countryName',model.countryName)
  postData.append('countryId',model.countryId)

  let responce =  this.http.put(this.url+'location-management/country_edit',postData)
  return responce;
}

getAllStates(){
  let responce =  this.http.get(this.url+'location-management?type=state')
  return responce;
}

getStatesByCountryId(countryId){
  console.log(countryId)
  let responce =  this.http.get(this.url+'location-management/states_by_country_id/'+countryId)
  return responce;
}
deleteCountryById(countryId){
  let responce =  this.http.delete(this.url+'location-management/delete_country/'+countryId)
  return responce;
}

editstates(model){
let responce = this.http.put(this.url+'location-management/state_edit',model)
return responce
}

deleteState(stateId){
  let responce = this.http.delete(this.url+'location-management/delete_state/'+stateId)
  return responce
}


getAllDistricts(){
  let responce = this.http.get(this.url+'location-management?type=district')
  return responce
}

editDistricts(model){
  let responce = this.http.put(this.url+'location-management/district_edit',model)
  return responce
  }

  deleteDistrict(districtId){
    let responce = this.http.delete(this.url+'location-management/delete_district/'+districtId)
    return responce
  }


  getDistrictsByStateId(stateId){
    let responce =  this.http.get(this.url+'location-management/districts_by_state_id/'+stateId)
    return responce;
  }
  
  getmandalsByDistrictId(districtId){
    let responce =  this.http.get(this.url+'location-management/mandals_by_district_id/'+districtId)
    return responce;
  }
  saveMandals(model){
    let responce =  this.http.post(this.url+'location-management/save_mandals',model)
 return responce;
  }
  getAllMandals(){
    let responce = this.http.get(this.url+'location-management?type=mandal')
    return responce
  }

  editMandals(model){
    let responce = this.http.put(this.url+'location-management/mandal_edit',model)
    return responce
    }
  
    deleteMandal(mandalId){
      let responce = this.http.delete(this.url+'location-management/delete_mandal/'+mandalId)
      return responce
    }


    getcountryBykeyup(country){
      let responce = this.http.get(this.url+'location-management/get_country_auto/'+country)
      return responce
    }
}
