import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSevices } from 'src/app/core/model-user/user.service';
import { checkEmail, checkPass, MustMatch } from '../../shared/validator/validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form: FormGroup;
  isSubmitted = false;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserSevices
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: [
        '',
        [Validators.pattern('^[a-z ]{2,}$'), Validators.required],
      ],
      email: ['', [Validators.required, checkEmail]],
      password: ['', [Validators.required, checkPass]],
      cfPass: ['', [Validators.required, checkPass]],
      region: ['', Validators.required],

      username: [
        '',
        [Validators.required, Validators.pattern('^[a-z0-9_]{2,30}$')],
      ],
      role: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    },{
      validator: MustMatch('password', 'cfPass')
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
      this.postUser();
    }
  }
  postUser() {
    this.userService.postUser(this.form.value).subscribe((data) => {
      this.router.navigate(['/login']);
    });
  }
  onLogin() {
    this.router.navigate(['/login']);
  }
}
