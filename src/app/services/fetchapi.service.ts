import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchapiService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:8080/products/');
  }
}
