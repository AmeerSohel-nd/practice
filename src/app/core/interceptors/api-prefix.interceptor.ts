import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('hey came in1');
    if (/^(http|https):/i.test(request.url)) {
      console.log('hey came in2');
      if (request.url.toLowerCase().includes('users')) {
        console.log('hey came in3');
        request = request.clone({
          headers: this.headers,
          url: request.url
        });
      }
    }
    return next.handle(request);
  }
}
