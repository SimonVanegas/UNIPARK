import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';
import { Lavadero } from '../admin/interfaces/lavadero';

@Injectable({
  providedIn: 'root'
})
export class ApiLavaderoService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/lavadero';

  constructor(private http: HttpClient) {}

  newLavadero(user: Lavadero){
    return this.http.post<Lavadero>(this.apiUrl, user)
  }

  getLavaderos(): Observable<Lavadero[]> {
    return this.http.get<Lavadero[]>(this.apiUrl);
  }

  getLavadero(id: number): Observable<Lavadero> {
    return this.http.get<Lavadero>(`${this.apiUrl}/${id}`);
  }

  patchLavadero(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteLavadero(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

