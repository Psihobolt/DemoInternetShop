import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingItem } from './data/shopping.item';
import { CartService } from './services/cart.service';
import { Observable, of, Subscription } from 'rxjs';
import { CartItem } from './data/cart.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  title = 'DemoInternetShop';
  
  constructor() {}
}
