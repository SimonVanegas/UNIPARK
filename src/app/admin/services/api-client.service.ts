import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  private apiUrl = 'https://api-unipark-production.up.railway.app/api/cliente';

  constructor(private http: HttpClient) {}

  newUser(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getUser(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }


  putUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

