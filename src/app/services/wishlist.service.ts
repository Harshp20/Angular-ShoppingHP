import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  public WishlistItems: any = [];
  public WishlistEmitter= new BehaviorSubject<any>([]);

  constructor() { }

  getWishlist(){
    return this.WishlistEmitter.asObservable();
  }

  addToWishlist(item: any){
    let exists = this.WishlistItems.find((a:any)=>a.name == item.name);
     try{
       if(item.name != exists.name){}
      }
      catch{
       this.WishlistItems.splice(0,0,item);
     }

    this.WishlistEmitter.next(this.WishlistItems);
  }

  deleteWishlistItems(item: any){
    this.WishlistItems.splice(this.WishlistItems.indexOf(item), 1);
    this.WishlistEmitter.next(this.WishlistItems);
  }

  emptyWishlist(){
    this.WishlistItems= [];
    this.WishlistEmitter.next(this.WishlistItems);
  }
}
