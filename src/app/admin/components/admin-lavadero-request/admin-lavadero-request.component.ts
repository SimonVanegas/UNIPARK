import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-lavadero-request',
  templateUrl: './admin-lavadero-request.component.html',
  styleUrls: ['./admin-lavadero-request.component.css','../../../styles.css']
})
export class AdminLavaderoRequestComponent {
  formOutVehicle: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formOutVehicle = this.fb.group({
      idUser: ['', Validators.required],
      carId: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
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
