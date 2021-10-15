import { map } from 'rxjs/operators';
import { RouterTestingModule } from '@angular/router/testing';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  public cartItems: any = [];
  public WishlistItems: any = [];
  public productList= new BehaviorSubject<any>([]);

  constructor() {}

  getProducts(){
    return this.productList.asObservable();
  }

  addToCart(product: any){
    // this.cartItems.map((a:any)=>{
    //   if(product.name== a.name)
    //     a.quantity++;
    // })
    // this.cartItems.map((item:any)=>{
    //   if(product != item)
    //})
    // Case 1: undefined
    // Case 2: 
    let exists = this.cartItems.find((a:any)=>a.name == product.name);
    // console.log(exists);
     try{
       if(product.name != exists.name){}
      }
      catch{
       this.cartItems.splice(0,0,product);
       
     }
     
     

    //  this.cartItems[this.cartItems.indexOf(product)].quantity++;
    //   if(product.name != a.name){
    //   }
    // });

      this.productList.next(this.cartItems);
    this.getTotalCost();    
  }
  
  addToWishlist(product: any){
    let exists = this.WishlistItems.find((a:any)=>a.name == product.name);
     try{
       if(product.name != exists.name){}
      }
      catch{
       this.WishlistItems.splice(0,0,product);
     }

    this.productList.next(this.WishlistItems);
  }

  getTotalCost(){
    let total = 0;
    this.cartItems.map((a:any)=>{
      total+= a.price;
    });
    // console.log(total);
    return total;
  }

  incrementQuantity(product: any){
    try{
      let exists = this.cartItems.find((a:any)=>a.name == product.name);
      exists.quantity++;
      exists.price+= exists.price;
     }
     catch{}
  }

  deletecartItems(product: any){
      this.cartItems.splice(this.cartItems.indexOf(product), 1);
      this.productList.next(this.cartItems);
  }

  emptyCart(){
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }
  
  deleteWishlistItems(product: any){
      this.WishlistItems.splice(this.WishlistItems.indexOf(product), 1);
      this.WishlistItems.next(this.WishlistItems);
  }

  emptyWishlist(){
    this.WishlistItems = [];
    this.WishlistItems.next(this.WishlistItems);
  }


}
