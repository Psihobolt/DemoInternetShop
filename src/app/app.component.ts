import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingItem } from './model/shopping.model';
import { CartService } from './services/cart.service';
import { Observable, of, Subscription } from 'rxjs';
import { CartItem } from './model/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  title = 'DemoInternetShop';
  
  constructor() {}
}
