import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facturacion } from '../admin/interfaces/facturacion';

@Injectable({
  providedIn: 'root',
})
export class ApiBillService {
  private apiUrl =
    'https://api-unipark-production.up.railway.app/api/facturacion';

  constructor(private http: HttpClient) {}

  newBill(facturacion: Facturacion) {
    return this.http.post<Facturacion>(this.apiUrl, facturacion);
  }

  getBills(): Observable<Facturacion[]> {
    return this.http.get<Facturacion[]>(this.apiUrl);
  }

  getBill(id_factura: number): Observable<Facturacion> {
    return this.http.get<Facturacion>(`${this.apiUrl}/${id_factura}`);
  }

  patchBill(facturacion: any): Observable<any> {
    return this.http.patch<any>(
      `${this.apiUrl}/${facturacion.id_factura}`,
      facturacion,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  deleteBill(id_factura: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id_factura}`);
  }
}
