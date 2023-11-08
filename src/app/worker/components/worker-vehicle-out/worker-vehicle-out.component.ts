import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-worker-vehicle-out',
  templateUrl: './worker-vehicle-out.component.html',
  styleUrls: ['../../styles.css','./worker-vehicle-out.component.css']
})
export class WorkerVehicleOutComponent {

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
