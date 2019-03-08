import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdminModule} from './admin/admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { StatusesComponent } from './admin/masters/statuses/statuses.component';
import { PossessionComponent } from './admin/masters/possession/possession.component';
import { AgeComponent } from './admin/masters/age/age.component';
import { AmenitiesComponent } from './admin/masters/amenities/amenities.component';
import { FacingComponent } from './admin/masters/facing/facing.component';
import { FurnishingComponent } from './admin/masters/furnishing/furnishing.component';
import { FloringsComponent } from './admin/masters/florings/florings.component';
import { ParkingsComponent } from './admin/masters/parkings/parkings.component';
import { MeasurementsComponent } from './admin/masters/measurements/measurements.component';
import { CountryComponent } from './admin/location-management/country/country.component';
import { StatesComponent } from './admin/location-management/states/states.component';
import { DistrictsComponent } from './admin/location-management/districts/districts.component';
import { MandalsComponent } from './admin/location-management/mandals/mandals.component';
import { VillagesComponent } from './admin/location-management/villages/villages.component';
import { BannersComponent } from './admin/banners/banners.component';

 

const appRoutes: Routes = [
  {path:'',component:LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusesComponent,
    PossessionComponent,
    AgeComponent,
    AmenitiesComponent,
    FacingComponent,
    FurnishingComponent,
    FloringsComponent,
    ParkingsComponent,
    MeasurementsComponent,
    CountryComponent,
    StatesComponent,
    DistrictsComponent,
    MandalsComponent,
    VillagesComponent,
    BannersComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    AdminModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
