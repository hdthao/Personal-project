import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/core/model-categories/categories.service';
import { JobService } from 'src/app/core/model-job/job.service';

@Component({
  selector: 'app-post-step',
  templateUrl: './post-step.component.html',
  styleUrls: ['./post-step.component.scss'],
})
export class PostStepComponent implements OnInit {
  jobData: any;
  listCountry: any[] = [];
  listTargetZone: string = '';
  index: any;
  isSwitch = true;
  showLoading = false;
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
  categoryName: string = '';
  categoryID: string = '';
  subCategoryID: string = '';
  subCategoryName: string = '';
  showAlert: boolean = false;
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
    this.jobService.getTargetZone(this.listTargetZone).subscribe();
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
    this.listCountry = [];
  }

  getCategoryName(data: any) {
    this.categoryName = data.name;
    this.categoryID = data.id;
  }

  getSubCategoryName(data: any) {
    this.subCategoryName = data.name;
    this.subCategoryID = data.id;
  }

  changeStep() {
    this.swtichStep = false;
  }

  getIndex(data: any) {
    this.index = data;
  }

  changeShowAlert(data: any) {
    this.showAlert = data;
  }

  postJob() {
    const jobDataToPost = {
      jobTitle: 'New Offer: Comment on Our Article 🔥🔥',
      tasksNeedCompleted: ['string', 'string', 'string'],
      additionalNotes: 'string',
      proofsRequired: [
        {
          proof: 'string',
          proofType: 'Text Proof',
        },
      ],
      jobLevel: 'Starter',
      category: this.categoryID,
      subCategory: this.subCategoryID,
      payment: 0,
      targetZone: this.listTargetZone,
      countryIds: [this.listCountry],
      speed: 10,
      workersNeeded: 30,
      maxPosition: 10,
      workersWillEarn: 10,
      holdJobTime: 10,
      pauseAfterApproval: true,
      estimatedJobCosts: 10,
    };
    this.showLoading = true
    this.jobService.postJob(jobDataToPost).subscribe((data) => {
      console.log(data);

      this.router.navigate(['/list-job']);
    });
  }
}
