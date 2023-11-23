import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiVehicleService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/vehiculo';

  constructor(private http: HttpClient) {}

  newVehicle(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getVehicles(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getVehicle(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  patchVehicle(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteVehicle(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


