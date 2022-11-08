import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  jobListData = new BehaviorSubject([]);
  sharedData = this.jobListData.asObservable();

  constructor(private http: HttpClient) {}

  getCountry() {
    return this.http.get('api/countries');
  }

  postJob(data: any) {
    return this.http.post('api/jobs/create', data);
  }

  getJobList(data: any) {
    return this.http.post('api/jobs/list', data);
  }

  updateData(data: any) {
    this.jobListData.next(data);
  }
}
