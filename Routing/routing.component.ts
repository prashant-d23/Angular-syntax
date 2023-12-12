import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit(){
    
    //activatedRoute

    this.route.snapshot.params.get('id'); //Access route Params
    this.route.snapshot.queryParams.get('id'); //Access query params
    this.route.snapshot.url //access the url segments
    
    this.router.navigate(['/home'])
    // Navigate to 'page1' route using the 'primaryOutlet'
    this.router.navigate([{ outlets: { primaryOutlet: 'page1' } }]);
}

// navigate programmatically

navigateToHome() {
  this.router.navigate(['/home']);
}

navigateWithPathParam(id: number) {
  this.router.navigate(['/products', id]);
}

navigateWithQueryParams(id: number, pwd: string) {
  this.router.navigate(['/services'], {
    queryParams: { id: id, pass: pwd },
  });
    


    
}
