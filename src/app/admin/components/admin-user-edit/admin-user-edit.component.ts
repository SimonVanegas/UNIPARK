import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent {
  formEditUser: FormGroup;
  showEdit = false;
  showDelete = false;

  constructor(private fb: FormBuilder) {
    this.formEditUser = this.fb.group({
      name: ['', Validators.required],
      lastNames: ['', Validators.required],
      idUser: ['', Validators.required],
      movil: ['', Validators.required],
      carId: ['', Validators.required],
      typeVehicle: ['', Validators.required]
    });
  }

  guardarRespuestas() {
    if (this.formEditUser.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formEditUser.value);
      this.showEdit = true;
      this.showDelete = true;
    } else {
      console.log('Formulario inválido');
    }
  }

  edit(){
    console.log("Presiono editar")
  }

  deleteU(){
    console.log("Presiono editar")
  }
}
