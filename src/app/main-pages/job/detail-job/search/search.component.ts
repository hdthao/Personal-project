import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/model-categories/categories.service';
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
  dataCategoryToSearch: string;
  sharedDataToSearch: string;
  valueToSearch:string;
  sortBy = 'Payment - DESC';
  valueSort = '';
  sortOrder = '';
  job = ['Starter', 'Advanced', 'Expert'];
  listSort = [
    {
      name: 'Payment - DESC',
      value: 'payment',
      sortOrder: 'DESC',
    },
    {
      name: 'Payment - ASC',
      value: 'payment',
      sortOrder: 'ASC',
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
  category:any;
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

  constructor(
    private jobService: JobService,
    private categoryService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.getJobList();
    this.getCategory()
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
      this.jobService.updateData(data);
      this.jobService.sharedData.subscribe(x => {
        this.jobListData = x
      })
    });
  }

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
  }

  sortJoblist() {
    const data = {
      limit: null,
      sortBy: this.valueSort,
      sortOrder: this.sortOrder,
    };
    this.jobService.getJobList(data).subscribe((data) => {
      this.jobService.updateData(data);
      this.jobService.sharedData.subscribe(x => {
        this.jobListData = x
      })
    });
  }

  selectSort(data: any) {
    this.sortBy = data.name;
    this.valueSort = data.value;
    this.sortOrder = data.sortOrder;
    this.sortJoblist();
    this.isToggle = false;
  }

  getValue(data:any) {
    this.dataCategoryToSearch = data;
  }

  applyToSearch() {
    this.showCategory = false;
    this.sharedDataToSearch = this.dataCategoryToSearch;
  }

  clear() {
    window.location.reload();
  }
}
