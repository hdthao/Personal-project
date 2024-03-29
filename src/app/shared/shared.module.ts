import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { StepComponent } from './step/step.component';
import { ShowResultComponent } from './show-result/show-result.component';
import { ClickOutsideDirective } from './directive/click-outside.directive';
import { FooterComponent } from '../layout/footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { Filter } from './pipe/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterCategory } from './pipe/filter-category.pipe';

@NgModule({
  declarations: [
    DetailHeaderComponent,
    StepComponent,
    ShowResultComponent,
    ClickOutsideDirective,
    FooterComponent,
    LoadingComponent,
    Filter,
    FilterCategory,
  ],
  imports: [CommonModule, NgxPaginationModule],
  exports: [
    DetailHeaderComponent,
    StepComponent,
    ShowResultComponent,
    ClickOutsideDirective,
    FooterComponent,
    LoadingComponent,
    Filter,
    NgxPaginationModule,
    FilterCategory,
  ],
})
export class SharedModule {}
