import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ShoppingItem } from '../../model/shopping-item.model';
import { AppState } from 'src/app/store/app.state';
import { CartListActions } from 'src/app/store/cart/cart.actions';
import { getAllProducts } from 'src/app/store/products/products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  host: {
    style: "display: contents"
  }
})
export class ProductListComponent implements OnInit {
  items$: Observable<ShoppingItem[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.items$ = this.store.select(getAllProducts);
  }

  addToCart(item:ShoppingItem){
    if (item){
      this.store.dispatch(CartListActions.addItemToCart({ payload: item }));
    }
  }
}
