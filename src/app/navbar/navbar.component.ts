import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  host:{
    style: 'display: contents'
  }
})
export class NavbarComponent {

  constructor(private cartService: CartService){}

  countItems$ = this.cartService.getCountItems();
}
