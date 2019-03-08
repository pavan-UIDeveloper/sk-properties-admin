import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsettingsComponent } from '../websettings/websettings.component';
import { MastersComponent } from '../masters/masters.component';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from '../admin.component';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';


const routes: Routes = [

  {path: 'admin', component: AdminComponent, children: [
    {path: 'websetting', component: WebsettingsComponent},
    {path: 'masters', component: MastersComponent},
    {path: 'change-password', component: ChangepasswordComponent},


  ]}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [WebsettingsComponent,MastersComponent,ChangepasswordComponent],
  providers: []

})
export class AdminModule { }
