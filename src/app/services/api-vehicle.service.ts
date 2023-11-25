import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../admin/interfaces/vehicle';

@Injectable({
  providedIn: 'root',
})
export class ApiVehicleService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/vehiculo';

  constructor(private http: HttpClient) {}

  newVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicle(placa_vehiculo: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${placa_vehiculo}`);
  }

  patchVehicle(vehicle: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${vehicle.placa_vehiculo}`, vehicle, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteVehicle(placa_vehiculo: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${placa_vehiculo}`);
  }
}
