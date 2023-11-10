import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-worker-vehicle-bill',
  templateUrl: './worker-vehicle-bill.component.html',
  styleUrls: ['../../../styles.css','./worker-vehicle-bill.component.css']
})
export class WorkerVehicleBillComponent {

  formOutVehicle: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formOutVehicle = this.fb.group({
      idUser: ['', Validators.required],
      carId: ['', Validators.required],
      dateIn: ['', Validators.required],
      dateOut: ['', Validators.required],
    });
  }

  guardarRespuestas() {
    if (this.formOutVehicle.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formOutVehicle.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}

