import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vehicle-out',
  templateUrl: './admin-vehicle-out.component.html',
  styleUrls: ['../../styles.css','./admin-vehicle-out.component.css']
})
export class AdminVehicleOutComponent {
  formOutVehicle: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formOutVehicle = this.fb.group({
      idUser: ['', Validators.required],
      carId: ['', Validators.required],
      // date: ['', Validators.required],
    });
  }

  guardarRespuestas() {
    if (this.formOutVehicle.valid) {
      console.log('Formulario válido');
      console.log('Valores:', this.formOutVehicle.value);
      this.router.navigate(['/admin/bill'])
    } else {
      console.log('Formulario inválido');
    }
  }
}
