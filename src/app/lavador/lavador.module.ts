import { NgModule } from '@angular/core';

import { ListComponent } from './components/list/list.component';
import { PageComponent } from './page/page.component';
import { CommonModule } from '@angular/common';
import { NavAdminComponent } from './components/navLavador/navLavador.component';
import { UserRoleComponent } from './components/user-role/user-role.component';

@NgModule({
  declarations: [
    ListComponent,
    PageComponent,
    NavAdminComponent,
    UserRoleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageComponent
  ],
  providers: [],
})
export class lavadorPage { }
