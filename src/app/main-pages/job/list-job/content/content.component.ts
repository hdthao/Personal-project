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
  @Input() config: any;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.sharedData.subscribe((x) => {
      this.jobListData = x;
    });
  }
}
