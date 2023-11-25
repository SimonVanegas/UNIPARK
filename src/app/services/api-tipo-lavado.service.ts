import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interfaces/user';
import { TypeLavado } from '../admin/interfaces/typeLavado';

@Injectable({
  providedIn: 'root'
})
export class ApiTipoLavadoService {

  private apiUrl = 'https://api-unipark-production.up.railway.app/api/tipoLavado';

  constructor(private http: HttpClient) {}

  newTipoLavado(user: TypeLavado){
    return this.http.post<TypeLavado>(this.apiUrl, user)
  }

  getTiposLavado(): Observable<TypeLavado[]> {
    return this.http.get<TypeLavado[]>(this.apiUrl);
  }

  getTipoLavado(id: number): Observable<TypeLavado> {
    return this.http.get<TypeLavado>(`${this.apiUrl}/${id}`);
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


