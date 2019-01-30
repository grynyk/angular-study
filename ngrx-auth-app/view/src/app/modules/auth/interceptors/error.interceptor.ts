import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .catch((response: any) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login');
        }
        return Observable.throw(response);
      });
  }
}