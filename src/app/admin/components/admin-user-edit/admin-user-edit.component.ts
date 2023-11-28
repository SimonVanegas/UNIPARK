import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../../interfaces/user';
import { ApiClientService } from '../../../services/api-client.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['../../../styles.css', './admin-user-edit.component.css'],
  // styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent {
  formEditUser: FormGroup;
  showList = false;
  showEdit = false;
  users: Users[] = [];

  constructor(
    private fb: FormBuilder,
    private clientAPI: ApiClientService,
    private router: Router
  ) {
    this.formEditUser = this.fb.group({
      idUser: ['', Validators.required],
      name: [''],
      lastNames: [''],
      movil: [''],
    });
  }

  guardarRespuestas() {
    if (this.formEditUser.valid) {
      this.showEdit = false;
      const client: number = this.formEditUser.get('idUser')?.value;
      this.clientAPI.getUser(client).subscribe((data) => this.showData(data));
      this.showList = true;
    } else {
      console.log('Formulario inválido');
    }
  }

  showData({ cedula, nombres, apellidos, celular }: Users) {
    this.users = [{ cedula, nombres, apellidos, celular }];
    this.formEditUser.get('name')?.setValue(nombres);
    this.formEditUser.get('lastNames')?.setValue(apellidos);
    this.formEditUser.get('movil')?.setValue(celular);
    this.showList = true;
  }

  edit(id: number) {
    this.showList = false;

    this.showEdit = true;
  }

  deleteU(id: number) {
    this.clientAPI.deleteUser(id).subscribe(() => {
      this.router.navigate(['/admin/']);
      alert('Usuario eliminado');
    });
  }

  saveUser() {
    if (
      this.formEditUser.get('idUser')?.value &&
      this.formEditUser.get('name')?.value &&
      this.formEditUser.get('lastNames')?.value &&
      this.formEditUser.get('movil')?.value
    ) {
      const user: Users = {
        cedula: this.formEditUser.get('idUser')?.value,
        nombres: this.formEditUser.get('name')?.value,
        apellidos: this.formEditUser.get('lastNames')?.value,
        celular: this.formEditUser.get('movil')?.value,
      };
      this.clientAPI.patchUser(user).subscribe((data) => console.log(data));
      console.log('Formulario valido');
      this.showList = false;

      this.showEdit = false;
      this.formEditUser.reset();
      alert('Usuario creado correctamente')
    } else {
      alert('Formulario inválido');
    }
  }
}
