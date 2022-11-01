import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootSevice } from '../core/guard/root.sevice';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate:[RootSevice] },
  { path: 'signUp', component: SignUpComponent, canActivate:[RootSevice] },
  { path: 'forgotPw', component: ForgotPwComponent, canActivate:[RootSevice] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
