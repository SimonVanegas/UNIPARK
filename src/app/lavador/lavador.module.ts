import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { PageLavadorComponent } from './page/page.component';
import { CommonModule } from '@angular/common';
import { NavAdminComponent } from './components/navLavador/navLavador.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    PageLavadorComponent,
    NavAdminComponent,
    UserRoleComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule
  ],
  exports: [
    PageLavadorComponent
  ],
  providers: [],
})
export class lavadorPage { }
