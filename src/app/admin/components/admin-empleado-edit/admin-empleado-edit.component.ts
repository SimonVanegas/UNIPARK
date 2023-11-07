import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employees } from '../../interfaces/employees';

@Component({
  selector: 'app-admin-empleado-edit',
  templateUrl: './admin-empleado-edit.component.html',
  styleUrls: ['../../styles.css','./admin-empleado-edit.component.css']
  // styleUrls: ['./admin-empleado-edit.component.css']
})
export class AdminEmployeeEditComponent {
  formEditEmployee: FormGroup;
  showList = false;

  constructor(private fb: FormBuilder) {
    this.formEditEmployee = this.fb.group({
      idUser: ['', Validators.required],
    });
  }

  employees:Employees[] = [
    { id: 1001230023, name: 'Pedro Escamoso', type: 1, cel: 5789004},
  ];

  guardarRespuestas() {
    if (this.formEditEmployee.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formEditEmployee.value);
      this.showList = true;

    } else {
      console.log('Formulario inválido');
    }
  }

  editEmployee(id:number){

  }

  deleteEmployee(id:number){

  }
}
