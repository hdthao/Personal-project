import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './detail-job/details.component';
import { PostStep1Component } from './post-job/post-step1/post-step1.component';
import { PostStep2Component } from './post-job/post-step2/post-step2.component';

const routes: Routes = [
  { path: 'details', component: DetailsComponent },
  {
    path: 'post',
    children: [
      { path: '', pathMatch: 'full', component: PostStep1Component },
      // { path: 'step2', component: PostStep2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRoutingModule {}
