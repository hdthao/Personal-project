import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem('userToken') !==null) {
      const token:any = localStorage.getItem('userToken');
      const header = new HttpHeaders().set('Authorization','Bearer ' + token);
      const au = request.clone({headers: header})
      return next.handle(au);
    }
    return next.handle(request);


  }
}
