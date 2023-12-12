@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivateChild {
    constructor(private router: Router) {}
  
    canActivateChild(
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // Check if user is authenticated
      if (/* Your authentication check here */) {
        return true;
      } else {
        // Redirect to login page
        return this.router.createUrlTree(['/login']);
      }
    }
  }
  