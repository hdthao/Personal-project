import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/users';
import { map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserSevices {
  constructor( private http: HttpClient) { }
  private apiUrl = environment.apiUrl;
  postUser(data: User) {
    return this.http.post<User>(`${this.apiUrl}/auth/register`, data);
  }
  getUser(data: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }
}
