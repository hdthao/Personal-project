import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedModule } from 'src/app/shared/shared.module';
import { ContentComponent } from './content/content.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { DetailsComponent } from './details.component';
import { DetailsRouting } from './details-routing.module';


@NgModule({
  declarations: [
    DetailsComponent,
    ContentComponent,
    SearchComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    sharedModule,
    NgxSliderModule,
    DetailsRouting
  ]
})
export class DetailsModule { }
