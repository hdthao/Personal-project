import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Authentication {
  constructor() {}

  isAuthenticated() {
    return localStorage.getItem('userToken') != null;
  }
}
