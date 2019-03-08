import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../admin.component';
import {FormsModule} from '@angular/forms'
import { WebsettingsComponent } from '../websettings/websettings.component';
import { MastersComponent } from '../masters/masters.component';
import { TypesComponent } from '../masters/types/types.component';
import { PropertiesComponent } from '../masters/properties/properties.component';
import { LocationManagementComponent } from '../location-management/location-management.component';
import { AdminManagementComponent } from '../admin-management/admin-management.component';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from '../admin-management/change-password/change-password.component';
import { LogOutComponent } from '../admin-management/log-out/log-out.component';
import { LoginComponent } from 'src/app/login/login.component';
import { StatusesComponent } from '../masters/statuses/statuses.component';
import { PossessionComponent } from '../masters/possession/possession.component';
import { AgeComponent } from '../masters/age/age.component';
import { AmenitiesComponent } from '../masters/amenities/amenities.component';
import { FacingComponent } from '../masters/facing/facing.component';
import { FurnishingComponent } from '../masters/furnishing/furnishing.component';
import { FloringsComponent } from '../masters/florings/florings.component';
import { ParkingsComponent } from '../masters/parkings/parkings.component';
import { MeasurementsComponent } from '../masters/measurements/measurements.component';
import { CountryComponent } from '../location-management/country/country.component';
import { StatesComponent } from '../location-management/states/states.component';
import { DistrictsComponent } from '../location-management/districts/districts.component';
import { MandalsComponent } from '../location-management/mandals/mandals.component';
import { VillagesComponent } from '../location-management/villages/villages.component';
import { BannersComponent } from '../banners/banners.component';


const adminRoutes: Routes=[
  
  {path:'admin',component:AdminComponent,children:[
    {path:'websettings',component:WebsettingsComponent},
    {path:'masters',component:MastersComponent,children:[
      {path:'types',component:TypesComponent},
      {path:'statuses',component:StatusesComponent},
      {path:'possession',component:PossessionComponent},
      {path:'age',component:AgeComponent},
      {path:'amenities',component:AmenitiesComponent},
      {path:'facing',component:FacingComponent},
      {path:'furnishing',component:FurnishingComponent},
      {path:'florings',component:FloringsComponent},
      {path:'parkings',component:ParkingsComponent},
      {path:'measurements',component:MeasurementsComponent}
    ]},
    {path:'locationmanagement',component:LocationManagementComponent,children:[
      {path:'country',component:CountryComponent},
      {path:'states',component:StatesComponent},
      {path:'districts',component:DistrictsComponent},
      {path:'mandals',component:MandalsComponent},
      {path:'villages',component:VillagesComponent}
      
    ]},
    {path:'admin_management',component:AdminManagementComponent,children:[
      {path:'changepassword',component:ChangePasswordComponent},
      {path:'logout',component:LogOutComponent}
    ]},
    {path:'banners',component:BannersComponent}
  ]}
  
]
@NgModule({
  declarations: [AdminComponent, 
    WebsettingsComponent, 
    MastersComponent, 
    TypesComponent,
    PropertiesComponent,
    LocationManagementComponent, 
    AdminManagementComponent, ChangePasswordComponent, LogOutComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(adminRoutes)
  ]
})
export class AdminModule { }
