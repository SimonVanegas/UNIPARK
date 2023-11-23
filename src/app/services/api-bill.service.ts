import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiBillService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/facturacion';

  constructor(private http: HttpClient) {}

  newBill(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getBills(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getBill(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  patchBill(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteBill(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
