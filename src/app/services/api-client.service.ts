import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/cliente';

  constructor(private http: HttpClient) {}

  newUser(client: Users){
    return this.http.post<Users>(this.apiUrl, client)
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getUser(cedula: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${cedula}`);
  }


  patchUser(client: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${client.cedula}`, client, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteUser(cedula: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${cedula}`);
  }
}

