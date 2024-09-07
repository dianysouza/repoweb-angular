import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  readonly apiURL: string = "http://localhost:8080";

  constructor(private http : HttpClient) { }

  getUser(username: string, password: string): Observable<Users>
  {
    const params = new HttpParams()
                  .set("nomeUsuario", username)
                  .set("senhaUsuario", password);

    return this.http.get<Users>(`${this.apiURL}/usuario`, { params: params});
  }
}
