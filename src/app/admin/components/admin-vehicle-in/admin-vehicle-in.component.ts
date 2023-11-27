import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reserve } from '../../interfaces/reserve';
import { ApiReserveService } from '../../../services/api-reserve.service';
import { ApiBillService } from 'src/app/services/api-bill.service';

@Component({
  selector: 'app-admin-vehicle-in',
  templateUrl: './admin-vehicle-in.component.html',
  styleUrls: ['../../../styles.css'],
})
export class AdminVehicleInComponent implements OnInit {
  formRequestVehicle: FormGroup;

  constructor(
    private fb: FormBuilder,
    private reserveAPI: ApiReserveService,
    private billAPI: ApiBillService
  ) {
    this.formRequestVehicle = this.fb.group({
      idUser: ['', Validators.required],
      carId: ['', Validators.required],
    });
  }

  reserve: Partial<Reserve> = {
    id_reserva: 0,
    fecha_reserva: '',
    placa_vehiculo: '',
    id_celda: 0,
    fecha_ingreso: '',
  };

  ngOnInit(): void {
    this.reserve.fecha_ingreso = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
  }

  guardarRespuestas() {
    if (this.formRequestVehicle.valid) {
      this.reserve = {
        ...this.reserve,
        placa_vehiculo: this.formRequestVehicle.get('carId')?.value,
        fecha_ingreso: this.reserve.fecha_ingreso,
      };
      this.reserveAPI.getReserves().subscribe((reserves) => {
        let resp = reserves.find(
          (reserve) =>
            reserve.placa_vehiculo === this.reserve.placa_vehiculo &&
            reserve.fecha_reserva.slice(0, 10) === this.reserve.fecha_ingreso
        );
        this.reserve = {
          ...this.reserve,
          id_reserva: resp?.id_reserva ?? 0,
          fecha_reserva: resp?.fecha_reserva.slice(0, 10) ?? '',
          id_celda: resp?.id_celda ?? 0,
        };
        this.updateReserve();
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  updateReserve() {
    this.reserveAPI.patchReserve(this.reserve).subscribe(() => {
      this.createFactura();
      alert('Vehículo ingresado correctamente');
      this.formRequestVehicle.reset();
    });
  }

  createFactura() {
    this.billAPI
      .newBill({
        id_reserva: this.reserve.id_reserva ?? 0,
        fecha: this.reserve.fecha_ingreso ?? '',
        id_cliente: this.formRequestVehicle.get('idUser')?.value,
      })
      .subscribe(() => {
        alert('Factura creada correctamente');
      });
  }
}
