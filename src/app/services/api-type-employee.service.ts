import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';
import { TypeEmployee } from '../admin/interfaces/typeEmployee';

@Injectable({
  providedIn: 'root'
})
export class ApiTypeEmployeeService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/tipoEmpleado';

  constructor(private http: HttpClient) {}

  newTypeEmployee(user: TypeEmployee){
    return this.http.post<TypeEmployee>(this.apiUrl, user)
  }

  getTypesEmployee(): Observable<TypeEmployee[]> {
    return this.http.get<TypeEmployee[]>(this.apiUrl);
  }

  getTypeEmployee(id: number): Observable<TypeEmployee> {
    return this.http.get<TypeEmployee>(`${this.apiUrl}/${id}`);
  }

  patchTypeEmployee(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteTypeEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


