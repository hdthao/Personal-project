import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auhentication {
  isLogin = false;
  constructor() {}

  login() {
    this.isLogin = true;
  }
  isLogout = false;

}
