import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiWorkerService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/empleado';

  constructor(private http: HttpClient) {}

  newWorker(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getWorkers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getWorker(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  putWorker(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteWorker(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
