import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../interfaces/user';


@Component({
  selector: 'app-worker-user-edit',
  templateUrl: './worker-user-edit.component.html',
  styleUrls: ['../../../styles.css', './worker-user-edit.component.css']
  // styleUrls: ['./admin-user-edit.component.css']
})

export class WorkerUserEditComponent {
  formEditUser: FormGroup;
  showList = false;

  constructor(private fb: FormBuilder) {
    this.formEditUser = this.fb.group({
      idUser: ['', Validators.required]
    });
  }

  users:Users[] = [
    { id: 1001230023, name: 'Pedro Escamoso', cel:3127962709 },
  ];

  guardarRespuestas() {
    if (this.formEditUser.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formEditUser.value);
      this.showList = true;
    } else {
      console.log('Formulario inválido');
    }
  }

  aceptarPersona(id: number) {
    // Lógica para aceptar persona con el ID proporcionado
    console.log(`Persona aceptada con ID: ${id}`);
  }

  edit(){
    console.log("Presiono editar")
  }

  deleteU(){
    console.log("Presiono editar")
  }
}
