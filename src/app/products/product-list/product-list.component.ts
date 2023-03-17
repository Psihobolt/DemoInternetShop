import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ShoppingItem } from '../../model/shopping-item.model';
import { CartService } from '../../services/cart.service';
import { LoadShoppingItems } from '../state/products.actions';
import { getProducts } from '../state/products.selectors';
import { addToCart } from 'src/app/cart/state/cart.actions';
import { ProductsState } from '../state/products.state';

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
              private store: Store<ProductsState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadShoppingItems);
    this.items$ = this.store.pipe(select(getProducts))
  }

  addToCart(item:ShoppingItem){
    if (item){
      this.store.dispatch(addToCart({ payload: item }));
    }
  }
}
