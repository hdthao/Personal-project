import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/users';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSevices {
  constructor( private http: HttpClient) { }
  SIGN_URL = 'http://103.18.7.212:1734/auth/register';
  LOGIN_URL = 'http://103.18.7.212:1734/auth/login';
  postUser(data: User) {
    return this.http.post<User>(this.SIGN_URL, data);
  }
  getUser(data: any) {
    return this.http.post(this.LOGIN_URL, data);
  }
}
