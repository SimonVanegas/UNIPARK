import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWorkerComponent } from './page/page.component';
import { WorkerRoleComponent } from './components/user-role/worker-role.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavWorkerComponent } from './components/navWorker/navWorker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkerUserCreateComponent } from './components/worker-user-create/worker-user-create.component';
import { WorkerUserEditComponent } from './components/worker-user-edit/worker-user-edit.component';
import { WorkerVehicleAddComponent } from './components/worker-vehicle-add/worker-vehicle-add.component';
import { WorkerVehicleRequestComponent } from './components/worker-vehicle-request/worker-vehicle-request.component';
import { WorkerVehicleOutComponent } from './components/worker-vehicle-out/worker-vehicle-out.component';
import { WorkerVehicleBillComponent } from './components/worker-vehicle-bill/worker-vehicle-bill.component';

@NgModule({
  declarations: [
    PageWorkerComponent,
    WorkerRoleComponent,
    NavWorkerComponent,
    WorkerUserCreateComponent,
    WorkerUserEditComponent,
    WorkerVehicleAddComponent,
    WorkerVehicleRequestComponent,
    WorkerVehicleOutComponent,
    WorkerVehicleBillComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule
  ],
  exports:[
    PageWorkerComponent
  ]
})
export class WorkerPage { }
