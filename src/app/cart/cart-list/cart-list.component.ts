import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app.state';
import { CartItem } from '../../model/cart.model';
import { CartService } from '../../services/cart.service';
import { LoadCart } from '../state/cart.actions';
import { getCartItems } from '../state/cart.selectors';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  host: {
    style: "display: contents"
  }
})
export class CartListComponent implements OnInit {
  itemsCart$: Observable<CartItem[]>;
  totalCart: number = 0;

  constructor(
    private cartService:CartService,
    private store: Store<AppState>
    ){}

  ngOnInit(): void {
    this.store.dispatch(new LoadCart());
    this.itemsCart$ = this.store.pipe(select(getCartItems));
    // this.totalCart = this.itemsCart$
    //     .reduce((total, item)=>total + item.count * item.item.price, 0);
  }

  downCountItem(id:number){
    this.cartService.downCountCartItem(id);
  }

  upCountItem(id:number){
    this.cartService.upCountCartItem(id);
  }
}
