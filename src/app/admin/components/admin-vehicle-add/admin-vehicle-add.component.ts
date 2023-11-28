import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeVehicle } from '../../interfaces/typeVehicle';
import { ApiVehicleService } from 'src/app/services/api-vehicle.service';
import { ApiTypeVehicleService } from 'src/app/services/api-type-vehicle.service';
import { Vehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-admin-vehicle-add',
  templateUrl: './admin-vehicle-add.component.html',
  styleUrls: ['../../../styles.css']
  // styleUrls: ['./admin-vehicle-add.component.css']
})
export class AdminVehicleAddComponent {
  formCreateVehicle: FormGroup;
  types: TypeVehicle[] = [];

  constructor(private fb: FormBuilder, private vehicleAPI : ApiVehicleService, private typeVehicleAPI : ApiTypeVehicleService) {
    this.formCreateVehicle = this.fb.group({
      idUser: ['', Validators.required],
      carId: ['', Validators.required],
      typeVehicle: ['', Validators.required],
    });
    this.typeVehicleAPI.getTypesVehicle().subscribe(data => this.types=data);

  }

  guardarRespuestas() {
    if (this.formCreateVehicle.valid) {
      const vehicle : Vehicle ={
        "placa_vehiculo": this.formCreateVehicle.get('carId')?.value,
        "id_tipo_vehiculo": this.formCreateVehicle.get('typeVehicle')?.value,
        "id_propietario": this.formCreateVehicle.get('idUser')?.value
      }
      this.vehicleAPI.newVehicle(vehicle).subscribe(data => console.log(data));
      this.formCreateVehicle.reset()
      alert('Vehiculo creado correctamente')
    } else {
      alert('Formulario inválido');
    }
  }

}
