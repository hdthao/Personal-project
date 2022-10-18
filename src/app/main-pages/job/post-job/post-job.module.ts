import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { PostStep1Component } from './post-step1/post-step1.component';
import { PostStep2Component } from './post-step2/post-step2.component';
import { PostJobModuleRouting } from './post-job.routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    PostStep1Component,
    PostStep2Component,
  ],
  imports: [
    CommonModule,
    sharedModule,
    PostJobModuleRouting
  ]
})
export class PostJobModule { }
