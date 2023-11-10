import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  formEditUser: FormGroup;

  constructor(private fb: FormBuilder,private router: Router){
    this.formEditUser = this.fb.group({
      username: ['', Validators.required],
      password: [''],
    });
  }

  guardarRespuestas(){
    const username = this.formEditUser.get('username')?.value.toLowerCase();
    switch (username) {
      case 'admin':
        this.router.navigate(['/admin'])
        break;
      case 'cliente':
        this.router.navigate(['/user'])
        break;
      case 'empleado':
        this.router.navigate(['/worker'])
        break;
      case 'lavador':
          this.router.navigate(['/lavador'])
        break;
      // Agregar más casos según las subopciones que tengas
    }
  }
}
