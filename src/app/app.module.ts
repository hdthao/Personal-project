import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { LoginComponent } from './main-pages/authentication/login/login.component';
import { SignUpComponent } from './main-pages/authentication/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPwComponent } from './main-pages/authentication/forgot-pw/forgot-pw.component';
import { ClickOutsideDirective } from './shared/directive/click-outside.directive';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';
import { DetailHeaderComponent } from './shared/detail-header/detail-header.component';
import { SearchComponent } from './main-pages/job/detail-job/search/search.component';
import { DetailsComponent } from './main-pages/job/detail-job/details.component';
import { PostStep1Component } from './main-pages/job/post-job/post-step1/post-step1.component';
import { PostStep2Component } from './main-pages/job/post-job/post-step2/post-step2.component';
import { ShowResultComponent } from './shared/show-result/show-result.component';
import { StepComponent } from './shared/step/step.component';
import { ContentComponent } from './main-pages/job/detail-job/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainPagesComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPwComponent,
    ClickOutsideDirective,
    HeaderComponent,
    SearchComponent,
    DetailsComponent,
    PostStep1Component,
    PostStep2Component,
    DetailHeaderComponent,
    ShowResultComponent,
    StepComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
