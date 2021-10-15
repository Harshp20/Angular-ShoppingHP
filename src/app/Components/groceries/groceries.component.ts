import { CartServiceService } from './../../services/cart-service.service';
import { FetchapiService } from './../../services/fetchapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  public groceries: any;

  constructor(private groceriesApi: FetchapiService, private cartService: CartServiceService) { }
  
  ngOnInit(): void {
    this.groceriesApi.getProducts().subscribe(res=>{
      this.groceries = res;
      console.log(this.groceries);
    });

    // this.groceries.forEach((i:any) => {
    //   Object.assign(i, {
    //     Quantity: 1,
    //     Total: i.price
    //   })
    // });
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
  }
  
}
