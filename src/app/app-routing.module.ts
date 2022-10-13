import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRoutingRoutingModule } from './main-pages/main-routing/main-routing-routing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),MainRoutingRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
