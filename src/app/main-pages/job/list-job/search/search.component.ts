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
  dataSubcategoryToSearch: any[] = [];
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

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
      console.log(this.category);
    })
  }

  getJobList() {
    const data = {
      limit: null,
      sortBy: this.valueSort || '',
      sortOrder: this.sortOrder || 'ASC',
      jobTitle: this.valueToSearch || '',
      category: this.dataCategoryToSearch || null,
    };
    this.jobService.getJobList(data).subscribe((data) => {
      this.jobService.updateData(data);
      this.jobService.sharedData.subscribe(x => {
        this.jobListData = x
      })
    });
    this.showCategory = false;
  }

  selectSort(data: any) {
    this.sortBy = data.name;
    this.valueSort = data.value;
    this.sortOrder = data.sortOrder;
    this.getJobList();
    this.isToggle = false;
  }

  getValueCategory(data:any) {
    this.dataCategoryToSearch = data;
  }

  getValueSubCategory(data:any) {
    this.dataSubcategoryToSearch = data;
    console.log(this.dataSubcategoryToSearch);
  }

  clear() {
    window.location.reload();
  }
}
