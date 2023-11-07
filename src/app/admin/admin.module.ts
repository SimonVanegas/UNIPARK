import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NavAdminComponent } from './components/navAdmin/navAdmin.component';
import { PageAdminComponent } from './page/page.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { AdminUserCreateComponent } from './components/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';
import { LavadorListComponent } from './components/admin-lavador-list/lavador-list.component';
import { AdminEmployeeCreateComponent } from './components/admin-empleado-create/admin-employee-create.component';
import { AdminEmployeeEditComponent } from './components/admin-empleado-edit/admin-empleado-edit.component';
import { AdminVehicleAddComponent } from './components/admin-vehicle-add/admin-vehicle-add.component';
import { AdminVehicleRequestComponent } from './components/admin-vehicle-request/admin-vehicle-request.component';
import { AdminVehicleOutComponent } from './components/admin-vehicle-out/admin-vehicle-out.component';
import { AdminVehicleBillComponent } from './components/admin-vehicle-bill/admin-vehicle-bill.component';
import { AdminLavaderoRequestComponent } from './components/admin-lavadero-request/admin-lavadero-request.component';

@NgModule({
  declarations: [
    NavAdminComponent,
    PageAdminComponent,
    UserRoleComponent,
    AdminUserCreateComponent,
    AdminUserEditComponent,
    AdminEmployeeCreateComponent,
    LavadorListComponent,
    AdminEmployeeEditComponent,
    AdminVehicleAddComponent,
    AdminVehicleRequestComponent,
    AdminVehicleOutComponent,
    AdminVehicleBillComponent,
    AdminLavaderoRequestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [
    PageAdminComponent
  ],
  providers: [],
})
export class AdminPage { }
