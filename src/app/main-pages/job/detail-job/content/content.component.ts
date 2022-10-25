import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/core/model-job/job.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() jobListData: any;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {}
}
