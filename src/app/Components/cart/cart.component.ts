import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public productList: any =[];
  public total: number = 0;
  
  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res:any)=>{
      this.productList = res;
      this.total = this.cartService.getTotalCost();
    });
  }

  deletecartItems(item: any){
    this.cartService.deletecartItems(item);
  }

  emptyCart(){
    this.cartService.emptyCart();
  }

}

