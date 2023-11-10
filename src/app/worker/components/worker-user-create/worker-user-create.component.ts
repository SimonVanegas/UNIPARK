import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-worker-user-create',
  templateUrl: './worker-user-create.component.html',
  styleUrls: ['../../../styles.css']
  // styleUrls: ['./admin-user-create.component.css']
})
export class WorkerUserCreateComponent {

  formCreateUser: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCreateUser = this.fb.group({
      name: ['', Validators.required],
      lastNames: ['', Validators.required],
      idUser: ['', Validators.required],
      movil: ['', Validators.required],
      carId: ['', Validators.required],
      typeVehicle: ['', Validators.required]
    });
  }

  guardarRespuestas() {
    if (this.formCreateUser.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formCreateUser.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
