import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState } from '../../store/app.state';
import { CartItem } from '../../model/cart.model';
import { CartListActions } from 'src/app/store/cart/cart.actions';
import { getAllCartItems, getTotalCartItems } from 'src/app/store/cart/cart.selectors';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  host: {
    style: "display: contents"
  }
})
export class CartListComponent {
  itemsCart$: Observable<CartItem[]> = this.store.select(getAllCartItems);
  totalCart$: Observable<number> =  this.store.select(getTotalCartItems);

  constructor(
    private store: Store<AppState>
    ){}

  downCountItem(id:number){
    this.store.dispatch(CartListActions.decCountItemFromCart({ id }));
  }

  upCountItem(id:number){
    this.store.dispatch(CartListActions.incCountItemFromCart({ id }));
  }
}
