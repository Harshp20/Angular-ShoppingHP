import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchapiService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>('http://localhost:8080/products');  
  }
}
