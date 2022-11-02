import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserSevices {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  postUser(data: User) {
    return this.http.post<User>(`${this.apiUrl}/auth/register`, data);
  }

  getUser(data: any) {
    return this.http.post(`${this.apiUrl}/auth/login`, data);
  }

  getUserInfor() {
    return this.http.get(`${this.apiUrl}/api/users/info`);
  }

  forgotPassword(data: any) {
    return this.http.post(`${this.apiUrl}/auth/forgot-password`, data);
  }

  switchRole(data: any) {
    return this.http.post(`${this.apiUrl}/api/users/switch-role`, data);
  }
}
