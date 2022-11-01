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
export class RootSevice implements CanActivate {
  constructor(private Auth: Auhentication, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.Auth.isLogout) {
      if (
        localStorage.getItem('userToken') !== null &&
        localStorage.getItem('userRole') !== null
      ) {
        this.router.navigate(['/list-job']);
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
}
