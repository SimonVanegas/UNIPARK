import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employees } from '../../interfaces/employees';
import { ApiWorkerService } from 'src/app/services/api-worker.service';

@Component({
  selector: 'app-admin-empleado-edit',
  templateUrl: './admin-empleado-edit.component.html',
  styleUrls: ['../../../styles.css','./admin-empleado-edit.component.css']
  // styleUrls: ['./admin-empleado-edit.component.css']
})
export class AdminEmployeeEditComponent {
  formEditEmployee: FormGroup;
  showList = false;
  showEdit = false;
  employees: Employees[]=[] ;

  constructor(private fb: FormBuilder, private employeeAPI : ApiWorkerService) {
    this.formEditEmployee = this.fb.group({
      idUser: ['', Validators.required],
      name: ['', ],
      lastNames: ['', ],
      movil: ['', ],
    });
  }

  guardarRespuestas() {
    if (this.formEditEmployee.valid) {
      this.showEdit = false;
      const employee : number = this.formEditEmployee.get('idUser')?.value;
      this.employeeAPI.getWorker(employee).subscribe(data => this.showData(data));
      this.showList = true;
    } else {
      console.log('Formulario inválido');
    }
  }

  showData({ cedula, nombres, apellidos, celular, id_tipo_empleado}: Employees){
    this.employees=[{cedula, nombres, apellidos, celular, id_tipo_empleado}];
    this.formEditEmployee.get('name')?.setValue(nombres);
    this.formEditEmployee.get('lastNames')?.setValue(apellidos);
    this.formEditEmployee.get('movil')?.setValue(celular);
    this.showList = true;
  }

  editEmployee(id:number){
    this.showList = false;

    this.showEdit = true;
  }

  deleteEmployee(id:number){

  }

  saveUser(){
    if(this.formEditEmployee.get('idUser')?.value && this.formEditEmployee.get('name')?.value && this.formEditEmployee.get('lastNames')?.value && this.formEditEmployee.get('movil')?.value){
      const employee : any ={
        "cedula": this.formEditEmployee.get('idUser')?.value,
        "nombres": this.formEditEmployee.get('name')?.value,
        "apellidos": this.formEditEmployee.get('lastNames')?.value,
        "celular": this.formEditEmployee.get('movil')?.value,
      }
      this.employeeAPI.patchWorker(employee).subscribe(data => console.log(data));
      console.log('Formulario valido');
      this.showList = false;

      this.showEdit = false;
      this.formEditEmployee.reset()

      alert('Empleado editado correctamente')
    } else {
      alert('Formulario inválido');
    }
  }
}
