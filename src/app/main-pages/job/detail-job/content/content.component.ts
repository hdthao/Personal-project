import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/core/model-job/job.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  jobListData: any;
  config: any;
  collection: number[] = [];
  @Input() dataToSearch: string;
  @Input() valueToSearch: string;

  constructor(
    private jobService: JobService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 10,
    };
    activatedRouter.queryParams.subscribe(
      (params) =>
        (this.config.currentPage = params['page'] ? params['page'] : 1)
    );
    for (let i = 1; i <= 100; i++) {
      this.collection.push(i);
    }
  }

  pageChange(data: any) {
    this.router.navigate(['list-job'], { queryParams: { page: data } });
  }

  ngOnInit(): void {
    this.jobService.sharedData.subscribe((x) => {
      this.jobListData = x;
    });
  }

  click() {}
}
