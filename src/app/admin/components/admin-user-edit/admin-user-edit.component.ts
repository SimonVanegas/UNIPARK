import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../interfaces/user';
import { ApiClientService } from '../../services/api-client.service';


@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['../../../styles.css', './admin-user-edit.component.css']
  // styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent {
  formEditUser: FormGroup;
  showList = false;
  users: Users[]=[] ;

  constructor(private fb: FormBuilder, private clientAPI : ApiClientService) {
    this.formEditUser = this.fb.group({
      idUser: ['', Validators.required]
    });
  }


  guardarRespuestas() {
    if (this.formEditUser.valid) {
      const client : number = this.formEditUser.get('idUser')?.value;
      this.clientAPI.getUser(client).subscribe(data => this.showData(data));
      this.showList = true;
    } else {
      console.log('Formulario inválido');
    }
  }

  showData({ cedula, nombres, apellidos, celular}:Users){
    this.users=[{cedula, nombres, apellidos, celular}];
    this.showList = true;
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
