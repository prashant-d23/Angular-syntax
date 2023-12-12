@Injectable({
    providedIn: 'root',
  })
  export class CanLoadGuard implements CanLoad {
    constructor(private authService: AuthService) {}
  
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      // Check if the user has permission to load the module
      return this.authService.canLoadModule();
    }
  }
  