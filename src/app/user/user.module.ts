import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageUserComponent } from './page/page.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavUserComponent } from './components/nav-user/nav-user.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { UserVehicleAddComponent } from './components/user-vehicle-add/user-vehicle-add.component';
import { UserVehicleReqComponent } from './components/user-vehicle-req/user-vehicle-req.component';
import { UserLavaderoReqComponent } from './components/user-lavadero-req/user-lavadero-req.component';
import { UserVehicleInComponent } from './components/user-vehicle-in/user-vehicle-in.component';



@NgModule({
  declarations: [
    PageUserComponent,
    NavUserComponent,
    UserRoleComponent,
    UserVehicleAddComponent,
    UserVehicleReqComponent,
    UserLavaderoReqComponent,
    UserVehicleInComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule
  ],
  exports: [
    PageUserComponent
  ]
})
export class UserPage { }
