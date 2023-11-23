import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../../interfaces/user';
import { ApiClientService } from '../../services/api-client.service';

@Component({
  selector: 'app-admin-user-create',
  templateUrl: './admin-user-create.component.html',
  styleUrls: ['../../../styles.css']
  // styleUrls: ['./admin-user-create.component.css']
})
export class AdminUserCreateComponent {

  formCreateUser: FormGroup;

  constructor(private fb: FormBuilder, private clientAPI : ApiClientService) {
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
      const client : Users ={
        "cedula": this.formCreateUser.get('idUser')?.value,
        "nombres": this.formCreateUser.get('name')?.value,
        "apellidos": this.formCreateUser.get('lastNames')?.value,
        "celular": this.formCreateUser.get('movil')?.value,
      }
      this.clientAPI.newUser(client).subscribe(data => console.log(data));

      this.formCreateUser.reset()
    } else {
      console.log('Formulario inválido');
    }
  }
}
