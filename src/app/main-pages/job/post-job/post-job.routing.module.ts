import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostStep1Component } from './post-step1/post-step1.component';
import { PostStep2Component } from './post-step2/post-step2.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: PostStep1Component },
      { path: 'step2', component: PostStep2Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostJobModuleRouting {}
