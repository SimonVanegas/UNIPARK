import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-lavadero-req',
  templateUrl: './user-lavadero-req.component.html',
  styleUrls: ['../../styles.css']
})
export class UserLavaderoReqComponent {
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
