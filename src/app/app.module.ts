import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { sharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    sharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
