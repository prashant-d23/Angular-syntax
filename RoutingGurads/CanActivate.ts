import {Injectable} from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
});

export class AuthGuard implements CanActivate{
    constructor(private router:Router){

    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (userIsAuthorized) {
          return true;
        } else {
          // Redirect to a different route or show an error page
          return this.router.createUrlTree(['/login']);
        }
      }

}

//in service we are implementing all the guards interfaces with their methods 