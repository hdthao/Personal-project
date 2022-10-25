import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor( private http: HttpClient) { }
  private apiUrl = environment.apiUrl;
  getCountry() {
    return this.http.get(`${this.apiUrl}/api/countries`)
  }
  getTargetZone(data:any) {
    return this.http.get(`${this.apiUrl}/api/countries?target_zone=${data} `);
  }
}
