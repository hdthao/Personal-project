import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, finalize } from 'rxjs/operators';
import { LoadingService } from '../loading-service/loading.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private loader: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loader.show();
    if (localStorage.getItem('userToken') !== null) {
      const token: any = localStorage.getItem('userToken');
      const header = new HttpHeaders().set('Authorization', 'Bearer ' + token);
      const au = request.clone({ headers: header });
      return next.handle(au).pipe(
        finalize(() => {
          this.loader.hide();
        })
      );
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.loader.hide();
      })
    );
  }
}
