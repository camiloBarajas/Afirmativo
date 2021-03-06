import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from 'app/services/authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(public _authService: AuthenticationService, public router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log('ia logged: ' + this._authService.isLoggedIn());

      if ( this._authService.isLoggedIn() ) {
        return true;
      }

      console.log('Access denied!');
      this.router.navigate(['login']);
      return false;

  }
}
