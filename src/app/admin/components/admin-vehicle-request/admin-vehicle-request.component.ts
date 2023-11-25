import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reserve } from '../../interfaces/reserve';
import { ApiReserveService } from '../../../services/api-reserve.service';
import { ApiVehicleService } from 'src/app/services/api-vehicle.service';
import { ApiParkingService } from 'src/app/services/api-parking.service';

@Component({
  selector: 'app-admin-vehicle-request',
  templateUrl: './admin-vehicle-request.component.html',
  styleUrls: ['../../../styles.css'],
})
export class AdminVehicleRequestComponent {
  formRequestVehicle: FormGroup;
  isDisabled: boolean = true;

  constructor(
    private fb: FormBuilder,
    private reserveAPI: ApiReserveService,
    private vehicleAPI: ApiVehicleService,
    private parkingAPI: ApiParkingService,
    private router: Router
  ) {
    this.formRequestVehicle = this.fb.group({
      carId: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  reserve: Reserve = {
    fecha_reserva: '',
    placa_vehiculo: '',
    id_celda: null,
  };

  guardarRespuestas() {
    if (this.formRequestVehicle.valid) {
      this.reserve = {
        fecha_reserva: this.formRequestVehicle.get('date')?.value,
        placa_vehiculo: this.formRequestVehicle.get('carId')?.value,
        id_celda: null,
      };

      let vehicleType: number;
      this.vehicleAPI
        .getVehicle(this.reserve.placa_vehiculo)
        .subscribe((data) => {
          vehicleType = data.id_tipo_vehiculo;
          this.getParkingCells(vehicleType);
        });
    } else {
      console.log('Formulario inválido');
    }
  }

  getParkingCells(vehicleType: number) {
    this.parkingAPI.getCells().subscribe((data) => {
      let suitableCell = data.filter(
        (cell) =>
          cell.id_tipo_celda === vehicleType && cell.id_estado_celda === 1
      );
      this.reserve.id_celda = suitableCell[0].id_celda;
      this.updateCellState();
    });
  }

  updateCellState() {
    this.parkingAPI
      .patchCell({
        id_celda: this.reserve.id_celda,
        id_estado_celda: 2,
      })
      .subscribe(() => {
        this.createReserve();
        this.router.navigate(['/admin/request-parking-successful'], {
          state: this.reserve,
        });
      });
  }

  createReserve() {
    this.reserveAPI.newReserve(this.reserve);
  }
}
