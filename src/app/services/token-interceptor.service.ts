import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {
    let authService = this.injector.get(AuthService)

    /*let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    */
    req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + authService.getToken()) });
    console.log(req)
    return next.handle(req)
  }
}
