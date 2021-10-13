import { FetchapiService } from './../../services/fetchapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  groceries: any;

  constructor(private groceriesApi: FetchapiService) { }
  
  ngOnInit(): void {
    this.groceriesApi.getProducts().subscribe(res=>{
      this.groceries = res;
      console.log(this.groceries);    
    })
  }
  
}
