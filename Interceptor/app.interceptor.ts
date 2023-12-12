import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler):any {
    console.log("Inside Interceptor",request);
    //handled request
    if(!request.url.includes('login') || !request.url.includes('sign-up')){

    }else{
      const token = "jdkjkdjfljfk";
      request = request.clone({setHeaders:{"Authorization":'Bearer'+token}});
    }

    //call will not be initiated
    // if(true){
    //   return EMPTY;
    // }

    //handle error
    return next.handle(request).pipe(map((response:any)=>{
      console.log("Response received at Interceptor" + response.status)
      return response
    }),
    catchError(this.handlerErrorResponse)
    );
  }

  //handle the error
  handlerErrorResponse(error:HttpErrorResponse):any{
    if(error.error instanceof ErrorEvent){
      console.log("client Side Error :",error.error.message)
    }else {
      console.log("Server side Error :",error.message);
    }


    throwError("Unable to process your request Please try after some time...")
  }
}
// =====================================================================================
//Set Headers in interceptor

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from your authentication service
    const authToken = 'your-auth-token';

    // Clone the request and add the token to the headers
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return next.handle(modifiedReq);
  }
}
// =====================================================================================

//Store data in local or session storage
@Injectable()
export class DataStorageInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Before the request
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      // You can modify the request, add headers, or perform other tasks based on stored data
    }

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        // After the response
        if (event instanceof HttpResponse) {
          // Store data in local storage
          localStorage.setItem('myData', JSON.stringify(event.body));
        }
      })
    );
  }
}

// =====================================================================================
// register interceptor at root level providers array 

@NgModule({
  declarations: [/* ... */],
  imports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataStorageInterceptor,
      multi: true,
    },
  ],
  bootstrap: [/* ... */],
})
// =====================================================================================