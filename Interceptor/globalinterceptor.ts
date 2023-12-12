import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add a fake token to the request headers (for demonstration)
    const fakeToken = 'your-fake-token';
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${fakeToken}`,
      },
    });

    // Continue with the request
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Successful response
          // You can handle successful responses here if needed
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        // Global error handling
        console.error('HTTP error:', error);

        // You can perform specific error handling here, such as showing a notification

        // Re-throw the error to propagate it to the calling code
        return throwError(error);
      })
    );
  }
}
