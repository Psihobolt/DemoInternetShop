import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingItem } from './model/shopping-item.model';
import { CartService } from './services/cart.service';
import { Observable, of, Subscription } from 'rxjs';
import { CartItem } from './model/cart.model';
import { CartState } from './cart/state/cart.entity';
import { Store } from '@ngrx/store';
import * as fromCartActions from './cart/state/cart.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'DemoInternetShop';
  
  constructor(private store:Store<CartState>) {}

  ngOnInit(): void {
    this.store.dispatch(fromCartActions.loadCart());
  }
}
