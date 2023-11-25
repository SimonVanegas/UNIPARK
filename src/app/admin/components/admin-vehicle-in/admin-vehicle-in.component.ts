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

  fecha_ingreso: string = '';

  reserve: Reserve | undefined = {
    id_reserva: 0,
    fecha_reserva: '',
    placa_vehiculo: '',
    id_celda: 0,
    fecha_ingreso: '',
    fecha_salida: '',
  };

  ngOnInit(): void {
    this.fecha_ingreso = `${new Date().getFullYear()}-${
      new Date().getMonth() + 1
    }-${new Date().getDate()}`;
  }

  guardarRespuestas() {
    if (this.formRequestVehicle.valid) {
      this.reserveAPI.getReserves().subscribe((reserves) => {
        this.reserve = reserves.find(
          (reserve) =>
            reserve.placa_vehiculo ===
              this.formRequestVehicle.get('carId')?.value &&
            reserve.fecha_reserva.slice(0, 10) === this.fecha_ingreso
        );
        this.updateReserve();
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  updateReserve() {
    if (typeof this.reserve !== 'undefined') {
      this.reserve.fecha_ingreso = this.fecha_ingreso;
      this.reserveAPI.patchReserve(this.reserve).subscribe(() => {
        this.createFactura();
        alert('Vehículo ingresado correctamente');
        this.formRequestVehicle.reset();
      });
    }
  }

  createFactura() {
    if (typeof this.reserve !== 'undefined') {
      this.billAPI
        .newBill({
          id_reserva: this.reserve.id_reserva || 0,
          fecha: this.fecha_ingreso,
          id_cliente: this.formRequestVehicle.get('idUser')?.value,
        })
        .subscribe(() => {
          alert('Factura creada correctamente');
        });
    }
  }
}
