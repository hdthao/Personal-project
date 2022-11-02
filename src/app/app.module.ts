import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { sharedModule } from './shared/shared.module';
import { InterceptorInterceptor } from './core/interceptor/interceptor.interceptor';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    MainPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    sharedModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
