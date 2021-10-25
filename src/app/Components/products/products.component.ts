import { Router } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';
import { CartServiceService } from '../../services/cart-service.service';
import { FetchapiService } from '../../services/fetchapi.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any =[];
  
  constructor(private groceriesApi: FetchapiService, private cartService: CartServiceService, private wishlistService: WishlistService, private router: Router) { }
  
  ngOnInit(): void {
    this.groceriesApi.getProducts().subscribe((res)=>{
      if(res instanceof HttpErrorResponse)
        if(res.status === 401)
          this.router.navigate(['/login']);

      this.products = res;
      console.log(this.products);
    });
    
    // this.groceries.forEach((element:any) => {
    //   this.cloneGroceries.push(element);
    // });
    // console.log(this.cloneGroceries);
    
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

  addToWishlist(item: any){
    this.wishlistService.addToWishlist(item);
  }
  
}
