import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor( private http: HttpClient) { }
  private apiUrl = environment.apiUrl;
  getCategory() {
    return this.http.get(`${this.apiUrl}/api/categories`)
  }
  // getTargetZone(data:any) {
  //   return this.http.get(`${this.apiUrl}/api/countries?target_zone=${data} `);
  // }
}
