import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./main-pages/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./main-pages/job/detail-job/details.module').then(
        (m) => m.DetailsModule
      ),
  },
  {
    path: 'post',
    loadChildren: () =>
      import('./main-pages/job/post-job/post-job.module').then(
        (m) => m.PostJobModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
