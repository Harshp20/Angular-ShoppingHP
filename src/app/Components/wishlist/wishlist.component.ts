import { WishlistService } from './../../services/wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public wishListItems:any =[];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.wishlistService.getWishlist().subscribe((res:any)=>{
      this.wishListItems = res;
    })
  }

  deleteWishlistItems(item:any){
    this.wishlistService.deleteWishlistItems(item);
  }

  emptyWishlist(){
    this.wishlistService.emptyWishlist();
  }

}
