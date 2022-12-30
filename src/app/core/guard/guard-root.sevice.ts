import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Authentication } from 'src/app/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class GuardRootSevice implements CanActivate {
  constructor(private Auth: Authentication, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.Auth.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
