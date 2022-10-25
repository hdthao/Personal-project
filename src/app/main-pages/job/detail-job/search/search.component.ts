import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobService } from 'src/app/core/model-job/job.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  isToggle = false;
  showJob = true;
  showCategory = true;
  showSubCategory = true;
  showPayment = true;
  showLocation = true;
  showEmp = true;
  showPrice = true;
  jobListData: any;
  jobListDataSort: any;
  sortBy = 'Payment - DESC';
  valueSort = '';
  sortOrder = '';
  job = ['Starter', 'Advanced', 'Expert'];
  listSort = [
    {
      name: 'Payment - ASC',
      value: 'payment',
      sortOrder: 'ASC',
    },
    {
      name: 'Payment - DESC',
      value: 'payment',
      sortOrder: 'DESC',
    },
    {
      name: 'Newest',
      value: '',
      sortOrder: 'ASC',
    },
    {
      name: 'Oldest',
      value: '',
      sortOrder: 'DESC',
    },
  ];
  category = [
    'Ad, Sales, Social Media Copy',
    'Articel & Blog Posts',
    'Beta Reading',
    'Book Reading',
    'Business Names & Slogans',
    'Creative Writing (UX, Speechwriting, Technical, Advice)',
    'Rsearch & Summaries',
    'Rsume Writing',
  ];
  subCategory = [
    'Display Advertising',
    'Commerce Marketing',
    'Influencer Marketing',
    'Marketing Advice',
    'Marketing Strategy (Content, Email)',
    'Mobile App Marketing',
  ];
  location = [
    'Afghanistan',
    'Aland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
  ];
  emp = [
    'Succesfull job - low to hight',
    'Successfull job - hight to low',
    '% task rated satifed - low to hight',
    '% task rated satifed - hight to low',
  ];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.getJobList();
  }

  toggle() {
    this.isToggle = !this.isToggle;
  }

  clickOutside(e: any) {
    this.isToggle = false;
  }

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '';
        case LabelType.High:
          return '';
        default:
          return '';
      }
    },
  };

  getJobList() {
    const data = {
      limit: null,
    };
    this.jobService.getJobList(data).subscribe((data: any) => {
      this.jobListData = data;
      console.log(data);
    });
  }

  sortJoblist() {
    const data = {
      limit: null,
      sortBy: this.valueSort,
      sortOrder: this.sortOrder,
    };
    this.jobService.getJobList(data).subscribe((data) => {
      this.jobListDataSort = data;
      this.jobListData = this.jobListDataSort;
      console.log(this.jobListData);
    });
  }

  selectSort(data: any) {
    this.sortBy = data.name;
    this.valueSort = data.value;
    this.sortOrder = data.sortOrder;
    this.sortJoblist();
    this.isToggle = false;
  }
}
