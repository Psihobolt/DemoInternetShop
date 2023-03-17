import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from '../../model/cart.model';
import { CartService } from '../../services/cart.service';
import { loadCart } from '../state/cart.actions';
import { CartState } from '../state/cart.entity';
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
    private store: Store<CartState>
    ){}

  ngOnInit(): void {
    this.store.dispatch(loadCart());
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
