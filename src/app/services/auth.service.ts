import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  
  private signupUrl= 'http://localhost/8080/products/signup';

  signupUser(user: any){
    return this.http.post(this.signupUrl, user);

  }
}