import { Component, OnInit } from '@angular/core';
import { Reserve } from '../../interfaces/reserve';
import { ApiVehicleService } from 'src/app/services/api-vehicle.service';
import { ApiClientService } from 'src/app/services/api-client.service';
import { Users } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-vehicle-request-successful',
  templateUrl: './admin-vehicle-request-successful.component.html',
  styleUrls: ['./admin-vehicle-request-successful.component.css'],
})
export class AdminVehicleRequestSuccessfulComponent implements OnInit {
  constructor(
    private vehicleAPI: ApiVehicleService,
    private clientAPI: ApiClientService,
    private router: Router
  ) {}
  cliente: Users = {
    cedula: 0,
    nombres: '',
    apellidos: '',
    celular: 0,
  };
  data: Reserve = history.state;

  ngOnInit(): void {
    this.vehicleAPI.getVehicle(this.data.placa_vehiculo).subscribe((data) => {
      this.cliente.cedula = data.id_propietario;
      this.clientAPI.getUser(this.cliente.cedula).subscribe((data) => {
        this.cliente = data;
      });
    });
  }

  goToHome() {
    this.router.navigate(['/admin']);
  }
}
