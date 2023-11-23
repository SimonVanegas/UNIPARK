import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiParkingService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/parqueadero';

  constructor(private http: HttpClient) {}

  newParking(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getParkings(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getParking(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  patchParking(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteParking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

