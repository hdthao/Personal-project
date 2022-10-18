import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './detail-job/details.component';
import { ContentComponent } from './detail-job/content/content.component';
import { SearchComponent } from './detail-job/search/search.component';
import { PostStep1Component } from './post-job/post-step1/post-step1.component';
import { PostStep2Component } from './post-job/post-step2/post-step2.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { JobRoutingModule } from './job.routing.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

@NgModule({
  declarations: [
    DetailsComponent,
    ContentComponent,
    SearchComponent,
    PostStep1Component,
    PostStep2Component,
  ],
  imports: [
    CommonModule,
    sharedModule,
    JobRoutingModule,
    NgxSliderModule
  ],
})
export class JobModule {}
