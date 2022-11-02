import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedModule } from 'src/app/shared/shared.module';
import { ListJob } from './list-job/list-job.component';
import { ContentComponent } from './list-job/content/content.component';
import { SearchComponent } from './list-job/search/search.component';
import { JobRoutingModule } from './job.routing.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { PostStepComponent } from './post-job/post-step/post-step.component';

@NgModule({
  declarations: [
    ListJob,
    ContentComponent,
    SearchComponent,
    PostStepComponent,
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
