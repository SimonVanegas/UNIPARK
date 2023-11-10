import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-vehicle-bill',
  templateUrl: './admin-vehicle-bill.component.html',
  styleUrls: ['../../../styles.css']
})
export class AdminVehicleBillComponent {
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
