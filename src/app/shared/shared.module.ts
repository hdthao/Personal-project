import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { StepComponent } from './step/step.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { FooterComponent } from '../layout/footer/footer.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    DetailHeaderComponent,
    StepComponent,
    ShowResultComponent,
    ClickOutsideDirective,
    FooterComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailHeaderComponent,
    StepComponent,
    ShowResultComponent,
    ClickOutsideDirective,
    FooterComponent,
    LoadingComponent,
  ]
})
export class sharedModule { }
