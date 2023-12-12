@Injectable({
    providedIn: 'root',
  })
  export class CanDeactivateGuard implements CanDeactivate<any> {
    canDeactivate(
      component: any,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      // Check if the form is dirty and show confirmation dialog if necessary
      if (component.isFormDirty()) {
        return window.confirm('Discard changes?');
      }
      return true;
    }
  }
  