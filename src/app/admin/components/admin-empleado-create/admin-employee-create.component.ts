import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-employee-create',
  templateUrl: './admin-employee-create.component.html',
  styleUrls: ['../../styles.css']

  // styleUrls: ['./admin-employee-create.component.css']
})
export class AdminEmployeeCreateComponent {

  formCreateEmployee: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCreateEmployee = this.fb.group({
      name: ['', Validators.required],
      lastNames: ['', Validators.required],
      idUser: ['', Validators.required],
      movil: ['', Validators.required],
      workerId: ['', Validators.required],
    });
  }

  guardarRespuestas() {
    if (this.formCreateEmployee.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formCreateEmployee.value);
    } else {
      console.log('Formulario inválido');
    }
  }

}
