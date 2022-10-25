import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { CategoriesService } from 'src/app/core/model-categories/categories.service';
import { JobService } from 'src/app/core/model-job/job.service';

@Component({
  selector: 'app-post-step1',
  templateUrl: './post-step1.component.html',
  styleUrls: ['./post-step1.component.scss'],
})
export class PostStep1Component implements OnInit {
  jobData: any;
  listCountry: any[] = [];
  listTargetZone: string = '';
  index: any;
  dataListTargetZone = [
    'Asia',
    'International',
    'USA & Western',
    'Africa',
    'Europe West',
    'Muslim Countries',
    'Europe East',
  ];
  listCategory: any;
  categoryName: string;
  subCategoryName: string;
  swtichStep = false;
  constructor(
    private router: Router,
    private jobService: JobService,
    private categoryService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.getCountryFromApi();
    this.getCategoriesFromApi();
  }

  getCountryFromApi() {
    this.jobService.getCountry().subscribe((data) => {
      this.jobData = data;
    });
  }

  getTargetZoneFromApi() {
    this.jobService.getTargetZone(this.listTargetZone).subscribe((data) => {
      console.log(data);
    });
  }

  getCategoriesFromApi() {
    this.categoryService.getCategory().subscribe((data) => {
      this.listCategory = data;
    });
  }

  getCtry(data: any) {
    let indexOfData = this.jobData.data[this.index];
    if (data) {
      this.listCountry.push(indexOfData.name);
    } else {
      let i = this.listCountry.indexOf(indexOfData.name);
      if (i > -1) {
        this.listCountry.splice(i, 1);
      }
    }
  }

  getTargetZone(data: any) {
    this.listTargetZone = data;
  }

  getCategoryName(data: any) {
    this.categoryName = data;
  }

  getSubCategoryName(data: any) {
    this.subCategoryName = data;
  }

  changeStep() {
    this.swtichStep = false;
  }

  getIndex(data: any) {
    this.index = data;
  }
}
