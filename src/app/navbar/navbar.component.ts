import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { getCountCartItems } from '../store/cart/cart.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  host:{
    style: 'display: contents'
  }
})
export class NavbarComponent {
  countItems$ = this.store.select(getCountCartItems);

  constructor(private store: Store<AppState>){}
}
