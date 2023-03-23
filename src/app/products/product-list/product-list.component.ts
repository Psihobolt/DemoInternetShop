import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ShoppingItem } from '../../model/shopping-item.model';
import { AppState } from 'src/app/store/app.state';
import { addToCart, loadProducts } from 'src/app/store/app.actions';
import { getAllProducts } from 'src/app/store/app.selectors';

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
    this.store.dispatch(loadProducts());
    this.store.select(getAllProducts).subscribe(v=>console.log(v));
    console.log("message after select")
    this.items$ = this.store.select(getAllProducts);
  }

  addToCart(item:ShoppingItem){
    console.log(item)
    if (item){
      this.store.dispatch(addToCart({ payload: item }));
    }
  }
}
