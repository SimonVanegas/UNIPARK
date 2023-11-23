import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiStateParkingService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/estadoCelda';

  constructor(private http: HttpClient) {}

  newStateParking(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getStatesParking(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getStateParking(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  patchStateParking(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteStateParking(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
