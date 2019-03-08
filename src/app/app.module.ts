import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin/admin.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

import {FormsModule} from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

// Third party packages
import {ToastrModule} from 'ngx-toastr';
import { AdminService } from './admin/admin.service';

const appRoutes: Routes = [
{path: '', component: LoginComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AdminModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
