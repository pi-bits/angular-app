import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    const modified = request.clone({
      setHeaders: { "test": "ppp"},
    });

    console.log(modified);
    return handler.handle(modified).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    )

  }

  constructor() { }
}
