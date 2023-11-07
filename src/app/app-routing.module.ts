import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPageComponent } from './webpage/page/page.component';
import { PageLoginComponent } from './login/page/page.component';
import { PageAdminComponent } from './admin/page/page.component';
import { AdminUserCreateComponent } from './admin/components/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './admin/components/admin-user-edit/admin-user-edit.component';
import { PageLavadorComponent } from './lavador/page/page.component';
import { LavadorListComponent } from './admin/components/admin-lavador-list/lavador-list.component';
import { AdminEmployeeCreateComponent } from './admin/components/admin-empleado-create/admin-employee-create.component';
import { AdminEmployeeEditComponent } from './admin/components/admin-empleado-edit/admin-empleado-edit.component';
import { AdminVehicleAddComponent } from './admin/components/admin-vehicle-add/admin-vehicle-add.component';
import { AdminVehicleRequestComponent } from './admin/components/admin-vehicle-request/admin-vehicle-request.component';
import { AdminVehicleOutComponent } from './admin/components/admin-vehicle-out/admin-vehicle-out.component';
import { AdminVehicleBillComponent } from './admin/components/admin-vehicle-bill/admin-vehicle-bill.component';
import { AdminLavaderoRequestComponent } from './admin/components/admin-lavadero-request/admin-lavadero-request.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:WebPageComponent},
  {path:'login', component:PageLoginComponent},
  {path:'admin',
  component:PageAdminComponent,
  children:[
    {path:'create-user', component:AdminUserCreateComponent},
    {path:'edit-user', component:AdminUserEditComponent},
    {path:'lavador', component:LavadorListComponent},
    {path:'create-employee', component:AdminEmployeeCreateComponent},
    {path:'edit-employee', component:AdminEmployeeEditComponent},
    {path:'add-vehicle', component:AdminVehicleAddComponent},
    {path:'request-parking', component:AdminVehicleRequestComponent},
    {path:'out-parking', component:AdminVehicleOutComponent},
    {path:'bill', component:AdminVehicleBillComponent},
    {path:'request-lavadero', component:AdminLavaderoRequestComponent},

  ]},
  {path:'login', component:PageLoginComponent},
  {path:'lavador', component:PageLavadorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
