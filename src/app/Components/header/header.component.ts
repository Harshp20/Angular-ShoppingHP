import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public cartCount: number = 0  ;
  
  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe((res:any)=>{
      this.cartCount = res.length;
    });
  }

  

}
