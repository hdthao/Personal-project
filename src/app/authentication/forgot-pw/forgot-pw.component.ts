import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSevices } from 'src/app/core/model-user/user.service';
import { checkEmail } from 'src/app/shared/validator/validator';

@Component({
  selector: 'app-forgot-pw',
  templateUrl: './forgot-pw.component.html',
  styleUrls: ['./forgot-pw.component.scss'],
})
export class ForgotPwComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserSevices
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, checkEmail]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    if (this.form.valid) {
      this.getPassword();
    }
  }

  getPassword() {
    this.userService.forgotPassword(this.form.value).subscribe(() => {
      alert('Please check your email to confirm your reset password');
    });
  }

  backToLogin() {
    this.router.navigate(['/login']);
  }

  get f() {
    return this.form.controls;
  }
}
