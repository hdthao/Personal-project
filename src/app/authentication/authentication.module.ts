import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPwComponent } from './forgot-pw/forgot-pw.component';
import { HeaderComponent } from 'src/app/layout/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { sharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SearchPipe } from '../shared/pipe/search.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPwComponent,
    HeaderComponent,
    SearchPipe,
    // FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationRoutingModule,
    sharedModule,
    MatSelectModule,
    MatInputModule,
  ]
})
export class AuthenticationModule { }
