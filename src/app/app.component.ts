import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { ProductListActions } from './store/products/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'DemoInternetShop';
  
  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(ProductListActions.loadShoppingItems());
  }
}
