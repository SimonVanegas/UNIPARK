import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-vehicle-req',
  templateUrl: './user-vehicle-req.component.html',
  styleUrls: ['../../styles.css']
})
export class UserVehicleReqComponent {
  formRequestVehicle: FormGroup;
  isDisabled: boolean = true;

  constructor(private fb: FormBuilder) {
    this.formRequestVehicle = this.fb.group({
      idUser: ['', Validators.required],
      carId: ['', Validators.required],
      date: ['', Validators.required],
      cell: [{ value: '', disabled: this.isDisabled }, Validators.required],
    });

  }

  guardarRespuestas() {
    if (this.formRequestVehicle.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formRequestVehicle.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
