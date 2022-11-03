import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSevices } from 'src/app/core/model-user/user.service';
import { checkPass, MustMatch } from 'src/app/shared/validator/validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserSevices,
    private route: Router
  ) {}
  name: string;
  form: FormGroup;
  isSubmitted = false;
  ngOnInit(): void {
    this.form = this.fb.group({
      oldPassword: ['', [Validators.required, checkPass]],
      newPassword: ['', [Validators.required, checkPass]],
    },{
      validator: MustMatch('oldPassword', 'newPassword'),
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
    }
  }
  resetPassword() {
    let token;
    this.router.queryParams.subscribe((q) => {
      token = q['token'];
    });
    console.log(token);
    const data = {
      token: token,
      newPassword: this.form.get('oldPassword')?.value,
      newPasswordConfirm: this.form.get('newPassword')?.value,
    };
    this.userService.resetPassword(data).subscribe((data) => {
      this.route.navigate(['login'])
    }, (err) =>{

    });
  }
}
