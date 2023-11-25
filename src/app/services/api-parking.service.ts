import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parking } from '../admin/interfaces/parking';

@Injectable({
  providedIn: 'root',
})
export class ApiParkingService {
  private apiUrl =
    'https://api-unipark-production.up.railway.app/api/parqueadero';

  constructor(private http: HttpClient) {}

  newCell(cell: Parking) {
    return this.http.post<Parking>(this.apiUrl, cell);
  }

  getCells(): Observable<Parking[]> {
    return this.http.get<Parking[]>(this.apiUrl);
  }

  getCell(id_celda: number): Observable<Parking> {
    return this.http.get<Parking>(`${this.apiUrl}/${id_celda}`);
  }

  patchCell(cell: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${cell.id_celda}`, cell, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  deleteCell(id_celda: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_celda}`);
  }
}
