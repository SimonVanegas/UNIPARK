import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiTypeVehicleService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/tipoVehiculo';

  constructor(private http: HttpClient) {}

  newTypeVehicle(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getTypesVehicle(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getTypeVehicle(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
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


