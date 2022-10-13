import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { ForgotPwComponent } from '../forgot-pw/forgot-pw.component';
import { LoginComponent } from '../login/login.component';
import { PostStep1Component } from '../post-job/post-step1/post-step1.component';
import { PostStep2Component } from '../post-job/post-step2/post-step2.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingRoutingModule {}
