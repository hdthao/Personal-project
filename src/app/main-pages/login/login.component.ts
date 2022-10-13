import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSignUp() {
    this.router.navigate(['/signUp']);
  }
  onForgotPw() {
    this.router.navigate(['/forgotPw']);
  }
  onDetails() {
    this.router.navigate(['/details'])
  }
}
