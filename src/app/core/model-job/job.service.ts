import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = environment.apiUrl;
  jobListData = new BehaviorSubject([]);
  sharedData = this.jobListData.asObservable();

  constructor(private http: HttpClient) {}

  getCountry() {
    return this.http.get(`${this.apiUrl}/api/countries`);
  }

  getTargetZone(data: any) {
    return this.http.get(`${this.apiUrl}/api/countries?target_zone=${data} `);
  }

  postJob(data: any) {
    return this.http.post(`${this.apiUrl}/api/jobs/create`, data);
  }

  getJobList(data: any) {
    return this.http.post(`${this.apiUrl}/api/jobs/list`, data);
  }

  updateData(data: any) {
    this.jobListData.next(data);
  }
}
