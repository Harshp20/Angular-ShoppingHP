import { AuthService } from './auth.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokencatchService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req:any, next:any){
    let token = this.authService.getToken();
    let tokenReq = req.clone({
      setHeaders: {
        Authorisation: `Bearer ${token}`
      }
    });
    return next.handle(tokenReq);
  }
}
