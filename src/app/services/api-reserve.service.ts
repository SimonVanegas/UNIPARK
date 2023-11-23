import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiReserveService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/reserva';

  constructor(private http: HttpClient) {}

  newReserve(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getReserves(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getReserve(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  patchReserve(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteReserve(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

