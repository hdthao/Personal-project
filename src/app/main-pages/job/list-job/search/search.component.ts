import { LabelType, Options } from '@angular-slider/ngx-slider';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/model-categories/categories.service';
import { JobService } from 'src/app/core/model-job/job.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  isToggle = false;
  enableSubCategory = true;
  showJob = true;
  showCategory = true;
  showSubCategory = true;
  showPayment = true;
  showLocation = true;
  showEmp = true;
  showPrice = true;
  jobListData: any;
  jobListDataSort: any;
  dataCategoryToSearch: any;
  categoryName: string;
  subCategoryName: string;
  dataSubcategoryToSearch: any;
  valueToSearch: string;
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
  category: any;
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
    private categoryService: CategoriesService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getCategory();
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

  getCategory() {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
      setTimeout(() => {
        const dataCategory = localStorage.getItem('category');
        const saveCategory = document.getElementById(
          `${dataCategory}`
        ) as HTMLInputElement | null;
        if (saveCategory?.id === dataCategory) {
          saveCategory.checked = true;
        }
        if (this.dataCategoryToSearch === '') {
          if (saveCategory) {
            saveCategory.checked = false;
          }
        }
        const dataSubcategory = localStorage.getItem('subCategory');
        const saveSubCategory = document.getElementById(
          `${dataSubcategory}`
        ) as HTMLInputElement | null;
        if (saveSubCategory?.id === dataSubcategory) {
          saveSubCategory.checked = true;
        }
        if (this.dataSubcategoryToSearch === '') {
          if (saveSubCategory) {
            saveSubCategory.checked = false;
          }
        }
      }, 100);
    });
  }

  getJobList() {
    this.dataCategoryToSearch =
      this.activatedRouter.snapshot.queryParamMap.get('category');
    this.dataSubcategoryToSearch =
      this.activatedRouter.snapshot.queryParamMap.get('subCategory');
    const data = {
      limit: null,
      sortBy: this.valueSort || '',
      sortOrder: this.sortOrder || 'ASC',
      jobTitle: this.valueToSearch || '',
      category: this.dataCategoryToSearch || null,
      subCategory: this.dataSubcategoryToSearch || null,
    };
    this.jobService.getJobList(data).subscribe((data) => {
      this.jobService.updateData(data);
      this.jobListData = data;
    });
    if (this.dataCategoryToSearch == '' || this.dataCategoryToSearch == null) {
      this.enableSubCategory = true;
    } else {
      this.enableSubCategory = false;
    }
    this.showCategory = false;
    this.showSubCategory = false;
  }

  selectSort(data: any) {
    this.sortBy = data.name;
    this.valueSort = data.value;
    this.sortOrder = data.sortOrder;
    this.getJobList();
    this.isToggle = false;
  }

  getValueCategory(data: any) {
    this.dataCategoryToSearch = data.id;
    this.categoryName = data.name;
    this.router.navigate(['/list-job'], {
      queryParams: { category: `${this.dataCategoryToSearch}` },
    });
    localStorage.setItem('category', this.dataCategoryToSearch);
    this.dataSubcategoryToSearch = null;
    localStorage.removeItem('subCategory');
  }

  getValueSubCategory(data: any) {
    this.dataSubcategoryToSearch = data.id;
    this.subCategoryName = data.name;
    this.router.navigate(['/list-job'], {
      queryParams: {
        category: `${this.dataCategoryToSearch}`,
        subCategory: `${this.dataSubcategoryToSearch}`,
      },
    });
    localStorage.setItem('subCategory', this.dataSubcategoryToSearch);
  }

  clearCategory() {
    const inputs = document.getElementById(
      `${this.dataCategoryToSearch}`
    ) as HTMLInputElement | null;
    if (inputs) {
      inputs.checked = false;
    }
    localStorage.removeItem('category');
    localStorage.removeItem('subCategory');
    this.showCategory = false;
    this.getCategory();
    this.router.navigate(['/list-job'], {
      queryParams: { category: null },
    });
    setTimeout(() => {
      this.getJobList();
    }, 100);
  }

  clearSubCategory() {
    const inputs = document.getElementById(
      `${this.dataSubcategoryToSearch}`
    ) as HTMLInputElement | null;
    if (inputs) {
      inputs.checked = false;
    }
    localStorage.removeItem('subCategory');
    this.showSubCategory = false;
    this.router.navigate(['/list-job'], {
      queryParams: {
        category: `${this.dataCategoryToSearch}`,
        subCategory: null,
      },
    });
    setTimeout(() => {
      this.getJobList();
    }, 100);
    this.getCategory();
  }
}
