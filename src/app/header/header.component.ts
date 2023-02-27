import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount:number;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getItemsCart()
        .subscribe(items=>this.cartCount = items.length);
  }
}
