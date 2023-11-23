import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiTypeCellService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/tipoCelda';

  constructor(private http: HttpClient) {}

  newTypeCell(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getTypesCell(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getTypeCell(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  patchTypeCell(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteTypeCell(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


