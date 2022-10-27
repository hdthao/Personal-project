import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/core/guard/gurad.service';
import { UserSevices } from 'src/app/core/model-user/user.service';
import { Auhentication } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  form: FormGroup;
  isValid = false;
  showLoading = false;

  constructor(
    private router: Router,
    private userService: UserSevices,
    private fb: FormBuilder,
    private auth: Auhentication
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    if (this.form.valid) {
      this.onLogin();
    }
  }

  onLogin() {
    this.userService.getUser(this.form.value).subscribe(
      (datas: any) => {
        localStorage.setItem('userToken', datas.data.token);
        this.userService.getUserInfor().subscribe((data: any) => {
          localStorage.setItem('userRole', data.data.role);
          if (localStorage.getItem('userToken') !== null) {
            this.auth.login();
          }
          this.showLoading = true;
          setTimeout(() => {
            this.router.navigate(['/detail-job']);
          }, 1000);
        });
      },
      (error) => {
        console.log(error);
        this.isValid = true;
      }
    );
  }

  onSignUp() {
    this.router.navigate(['/signUp']);
  }

  onForgotPw() {
    this.router.navigate(['/forgotPw']);
  }
}
