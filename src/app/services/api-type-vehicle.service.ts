import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';
import { Vehicle } from '../admin/interfaces/vehicle';
import { TypeVehicle } from '../admin/interfaces/typeVehicle';

@Injectable({
  providedIn: 'root'
})
export class ApiTypeVehicleService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/tipoVehiculo';

  constructor(private http: HttpClient) {}

  newTypeVehicle(user: TypeVehicle){
    return this.http.post<TypeVehicle>(this.apiUrl, user)
  }

  getTypesVehicle(): Observable<TypeVehicle[]> {
    return this.http.get<TypeVehicle[]>(this.apiUrl);
  }

  getTypeVehicle(id: number): Observable<TypeVehicle> {
    return this.http.get<TypeVehicle>(`${this.apiUrl}/${id}`);
  }

  patchTypeVehicle(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteTypeVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


