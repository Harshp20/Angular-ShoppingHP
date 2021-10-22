import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  private signupUrl= 'http://localhost:8080/products/signup';
  private loginUrl= 'http://localhost:8080/products/login';

  login(user:any){  
    return this.http.post(this.loginUrl, user).pipe(map((res:any)=>{
      if(res && res.token)
      {
        console.log(res, res.token);
        localStorage.setItem('token', res.token);
        return true;
      }
      else
        return false;
    }));
    
  }
  
  signupUser(user:any){
    return this.http.post(this.signupUrl, user).pipe(map((res:any)=>{
      if(res && res.token)
      {
        console.log(res, res.token);
        localStorage.setItem('token', res.token);
        return true;
      }
      else
        return false;
    }));
  }
  
}