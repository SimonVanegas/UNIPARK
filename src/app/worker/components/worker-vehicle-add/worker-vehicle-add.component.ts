import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-vehicle-add',
  templateUrl: './worker-vehicle-add.component.html',
  styleUrls: ['../../styles.css']
  // styleUrls: ['./admin-vehicle-add.component.css']
})
export class WorkerVehicleAddComponent {
  formCreateVehicle: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCreateVehicle = this.fb.group({
      idUser: ['', Validators.required],
      carId: ['', Validators.required],
      typeVehicle: ['', Validators.required],
    });
  }

  guardarRespuestas() {
    if (this.formCreateVehicle.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formCreateVehicle.value);
    } else {
      console.log('Formulario inválido');
    }
  }

}
