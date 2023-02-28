import { Component } from '@angular/core';
import { ShoppingItem } from './data/shopping.item';
import { CartService } from './services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoInternetShop';
  
  constructor(private cartService: CartService) {}

  addToCart(item:ShoppingItem){
    this.cartService.addToCart(item);
  }

  getListCart():Observable<ShoppingItem[]>{
    return this.cartService.getItemsCart();
  }
}
