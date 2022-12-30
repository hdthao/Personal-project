import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserSevices {
  constructor(private http: HttpClient) {}

  postUser(data: User) {
    return this.http.post<User>('auth/register', data);
  }

  getUser(data: any) {
    return this.http.post('auth/login', data);
  }

  getUserInfor() {
    return this.http.get('api/users/info');
  }

  forgotPassword(data: any) {
    return this.http.post('auth/forgot-password', data);
  }

  switchRole(data: any) {
    return this.http.post('api/users/switch-role', data);
  }
  resetPassword(data: any) {
    return this.http.post('auth/reset-password', data);
  }
}
