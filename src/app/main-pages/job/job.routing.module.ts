import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './detail-job/details.component';
import { PostStepComponent } from './post-job/post-step/post-step.component';
import { PostStep2Component } from './post-job/post-step2/post-step2.component';

const routes: Routes = [
  { path: 'detail-job', component: DetailsComponent },
  { path: 'post', component: PostStepComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRoutingModule {}
