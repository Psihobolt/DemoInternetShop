import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../store/app.state';
import { ShoppingItem } from '../../model/shopping-item.model';
import { CartService } from '../../services/cart.service';
import { LoadShoppingItems } from '../state/products.actions';
import { getProducts } from '../state/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  host: {
    style: "display: contents"
  }
})
export class ProductListComponent implements OnInit {
  items$: Observable<ShoppingItem[]>;

  constructor(private cartService: CartService,
              private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadShoppingItems);
    this.items$ = this.store.pipe(select(getProducts))
  }

  addToCart(item:ShoppingItem){
    if (item){
      this.cartService.addToCart(item);
    }
  }
}
