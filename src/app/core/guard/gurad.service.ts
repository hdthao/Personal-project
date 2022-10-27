import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Auhentication } from 'src/app/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  constructor(private Auth: Auhentication, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.Auth.isLogin) {
      return true;
    }
    if(localStorage.getItem('userToken')) {
      return true;
    }
    else {
      this.router.navigate(['']);
      return false;
    }

  }
}
