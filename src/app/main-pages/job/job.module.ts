import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './detail-job/details.component';
import { ContentComponent } from './detail-job/content/content.component';
import { SearchComponent } from './detail-job/search/search.component';
import { PostStep2Component } from './post-job/post-step2/post-step2.component';
import { JobRoutingModule } from './job.routing.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { PostStepComponent } from './post-job/post-step/post-step.component';

@NgModule({
  declarations: [
    DetailsComponent,
    ContentComponent,
    SearchComponent,
    PostStepComponent,
    PostStep2Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    sharedModule,
    JobRoutingModule,
    NgxSliderModule
  ],
})
export class JobModule {}
