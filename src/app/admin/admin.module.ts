import { NgModule } from '@angular/core';

import { NavAdminComponent } from './components/navAdmin/navAdmin.component';
import { PageAdminComponent } from './page/page.component';
import { CommonModule } from '@angular/common';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { AdminUserCreateComponent } from './components/admin-user-create/admin-user-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUserEditComponent } from './components/admin-user-edit/admin-user-edit.component';

@NgModule({
  declarations: [
    NavAdminComponent,
    PageAdminComponent,
    UserRoleComponent,
    AdminUserCreateComponent,
    AdminUserEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PageAdminComponent
  ],
  providers: [],
})
export class AdminPage { }
