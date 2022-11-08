import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardRootSevice } from '../core/guard/guard-root.sevice';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [GuardRootSevice] },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  {
    path: 'forgotPw',
    component: ForgotPwComponent,
  },
  {
    path: 'auth/confirm',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
