import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from 'src/app/core/guard/gurad.service';
import { ListJob } from './list-job/list-job.component';
import { PostStepComponent } from './post-job/post-step/post-step.component';

const routes: Routes = [
  {
    path: 'list-job',
    component: ListJob,
    canActivate: [GuardService],
  },
  {
    path: 'post',
    component: PostStepComponent,
    canActivate: [GuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobRoutingModule {}
