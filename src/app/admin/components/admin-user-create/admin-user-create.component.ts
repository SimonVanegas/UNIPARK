import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../interfaces/user';
import { ApiClientService } from '../../../services/api-client.service';
import { Vehicle } from '../../interfaces/vehicle';
import { ApiVehicleService } from 'src/app/services/api-vehicle.service';
import { TypeVehicle } from '../../interfaces/typeVehicle';
import { ApiTypeVehicleService } from 'src/app/services/api-type-vehicle.service';

@Component({
  selector: 'app-admin-user-create',
  templateUrl: './admin-user-create.component.html',
  styleUrls: ['../../../styles.css']
  // styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent {
  types: TypeVehicle[] = [];

  formCreateUser: FormGroup;

  constructor(private fb: FormBuilder, private clientAPI : ApiClientService, private vehicleAPI : ApiVehicleService, private typeVehicleAPI : ApiTypeVehicleService) {
    this.formCreateUser = this.fb.group({
      name: ['', Validators.required],
      lastNames: ['', Validators.required],
      idUser: ['', Validators.required],
      movil: ['', Validators.required],
      carId: ['', Validators.required],
      typeVehicle: ['', Validators.required]
    });
    this.typeVehicleAPI.getTypesVehicle().subscribe(data => this.types=data);
  }

  guardarRespuestas() {
    if (this.formCreateUser.valid) {
      const client : Users ={
        "cedula": this.formCreateUser.get('idUser')?.value,
        "nombres": this.formCreateUser.get('name')?.value,
        "apellidos": this.formCreateUser.get('lastNames')?.value,
        "celular": this.formCreateUser.get('movil')?.value,
      }
      this.clientAPI.newUser(client).subscribe(data => console.log(data));

      const vehicle : Vehicle ={
        "placa_vehiculo": this.formCreateUser.get('carId')?.value,
        "id_tipo_vehiculo": this.formCreateUser.get('typeVehicle')?.value,
        "id_propietario": this.formCreateUser.get('idUser')?.value
      }
      this.vehicleAPI.newVehicle(vehicle).subscribe(data => console.log(data));

      this.formCreateUser.reset()
      alert('Usuario creado correctamente')
    } else {
      alert('Formulario inválido');
    }
  }
}
