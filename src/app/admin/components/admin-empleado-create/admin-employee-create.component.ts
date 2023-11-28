import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employees } from '../../interfaces/employees';
import { ApiTypeEmployeeService } from 'src/app/services/api-type-employee.service';
import { ApiWorkerService } from 'src/app/services/api-worker.service';
import { TypeEmployee } from '../../interfaces/typeEmployee';

@Component({
  selector: 'app-admin-employee-create',
  templateUrl: './admin-employee-create.component.html',
  styleUrls: ['../../../styles.css']
})
export class AdminEmployeeCreateComponent {
  types: TypeEmployee[] = [];

  formCreateEmployee: FormGroup;

  constructor(private fb: FormBuilder, private typeEmployeeAPI : ApiTypeEmployeeService, private employeeAPI : ApiWorkerService) {
    this.formCreateEmployee = this.fb.group({
      name: ['', Validators.required],
      lastNames: ['', Validators.required],
      idUser: ['', Validators.required],
      movil: ['', Validators.required],
      workerId: ['', Validators.required],
    });
    this.typeEmployeeAPI.getTypesEmployee().subscribe(data => this.types=data);
  }

  guardarRespuestas() {
    if (this.formCreateEmployee.valid) {
      const employee : Employees ={
        "cedula": this.formCreateEmployee.get('idUser')?.value,
        "nombres": this.formCreateEmployee.get('name')?.value,
        "apellidos": this.formCreateEmployee.get('lastNames')?.value,
        "celular": this.formCreateEmployee.get('movil')?.value,
        "id_tipo_empleado": this.formCreateEmployee.get('workerId')?.value,

      }
      this.employeeAPI.newWorker(employee).subscribe(data => console.log(data));

      this.formCreateEmployee.reset();
      alert('Empleado creado correctamente');
    } else {
      alert('Formulario inválido');
    }

  }

}
