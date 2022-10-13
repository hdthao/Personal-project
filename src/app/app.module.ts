import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { LoginComponent } from './main-pages/login/login.component';
import { SignUpComponent } from './main-pages/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-pages/main-routing/main-routing.module';
import { ForgotPwComponent } from './main-pages/forgot-pw/forgot-pw.component';
import { SearchComponent } from './main-pages/details/search/search.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { ContentComponent } from './main-pages/details/content/content.component';
import { DetailsComponent } from './main-pages/details/details.component';
import { HeaderDetailsComponent } from './main-pages/header-details/header-details.component';
import { PostStep1Component } from './main-pages/post-job/post-step1/post-step1.component';
import { ShowResultComponent } from './shared/layout/show-result/show-result.component';
import { StepComponent } from './shared/layout/step/step.component';
import { PostStep2Component } from './main-pages/post-job/post-step2/post-step2.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainPagesComponent,
    LoginComponent,
    SignUpComponent,
    ForgotPwComponent,
    SearchComponent,
    ClickOutsideDirective,
    ContentComponent,
    DetailsComponent,
    HeaderDetailsComponent,
    PostStep1Component,
    ShowResultComponent,
    StepComponent,
    PostStep2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
