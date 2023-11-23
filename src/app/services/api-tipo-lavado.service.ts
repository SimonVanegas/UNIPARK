import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiTipoLavadoService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/tipoLavado';

  constructor(private http: HttpClient) {}

  newTipoLavado(user: Users){
    return this.http.post<Users>(this.apiUrl, user)
  }

  getTiposLavado(): Observable<Users[]> {
    return this.http.get<Users[]>(this.apiUrl);
  }

  getTipoLavado(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiUrl}/${id}`);
  }

  patchTipoLavado(user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${user.id}`, user, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteTipoLavado(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}


