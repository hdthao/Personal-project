import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPwComponent } from './main-pages/authentication/forgot-pw/forgot-pw.component';
import { DetailsComponent } from './main-pages/job/detail-job/details.component';
import { PostStep1Component } from './main-pages/job/post-job/post-step1/post-step1.component';
import { PostStep2Component } from './main-pages/job/post-job/post-step2/post-step2.component';
import { LoginComponent } from './main-pages/authentication/login/login.component';
import { SignUpComponent } from './main-pages/authentication/sign-up/sign-up.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'forgotPw', component: ForgotPwComponent },
  { path: 'details', component: DetailsComponent },
  {
    path: 'post',
    children: [
      { path: '', pathMatch: 'full', component: PostStep1Component },
      { path: 'step2', component: PostStep2Component },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
