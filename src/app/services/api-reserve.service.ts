import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserve } from '../admin/interfaces/reserve';

@Injectable({
  providedIn: 'root',
})
export class ApiReserveService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/reserva';

  constructor(private http: HttpClient) {}

  newReserve(reserve: Reserve) {
    return this.http.post<Reserve>(this.apiUrl, reserve);
  }

  getReserves(): Observable<Reserve[]> {
    return this.http.get<Reserve[]>(this.apiUrl);
  }

  getReserve(id: number): Observable<Reserve> {
    return this.http.get<Reserve>(`${this.apiUrl}/${id}`);
  }

  patchReserve(reserva: any): Observable<any> {
    return this.http.patch<any>(
      `${this.apiUrl}/${reserva.id_reserva}`,
      reserva,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  deleteReserve(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
