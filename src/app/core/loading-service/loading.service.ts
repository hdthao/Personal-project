import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading = new BehaviorSubject(false);
  public readonly loading$ = this.loading.asObservable();
  constructor() {}
  show() {
    this.loading.next(true);
  }

  hide() {
    this.loading.next(false);
  }

}
