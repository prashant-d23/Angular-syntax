@Injectable({
    providedIn: 'root',
  })
  export class DataResolver implements Resolve<any> {
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
      // Fetch data from a service or other data source
      return this.dataService.getData(route.params.id);
    }
  }
  