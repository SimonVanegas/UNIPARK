import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';
import { Employees } from '../admin/interfaces/employees';

@Injectable({
  providedIn: 'root'
})
export class ApiWorkerService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/empleado';

  constructor(private http: HttpClient) {}

  newWorker(user: Employees){
    return this.http.post<Employees>(this.apiUrl, user)
  }

  getWorkers(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.apiUrl);
  }

  getWorker(id: number): Observable<Employees> {
    return this.http.get<Employees>(`${this.apiUrl}/${id}`);
  }

  patchWorker(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.cedula}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteWorker(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
