import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  private signupUrl= 'http://localhost:8080/products/signup';
  private loginUrl= 'http://localhost:8080/products/login';

  signupUser(user: any){
    return this.http.post(this.signupUrl, user);
  }

  login(user:any){
    return this.http.post(this.loginUrl, user);
  }
  
}