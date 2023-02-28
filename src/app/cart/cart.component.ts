import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { CartItem } from '../data/cart.item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  host: {
    style: "display: contents"
  }
})
export class CartComponent implements OnInit {
  itemsCart:CartItem[] = [];
  totalCart:number = 0;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.itemsCart$.subscribe(items => {
      this.itemsCart = items;
      this.totalCart = this.itemsCart.reduce((total, item)=>total + item.count * item.item.price, 0);
    } );
  }

  downCountItem(id:number){
    this.cartService.onDownCountItem$.next(id);
  }

  upCountItem(id:number){
    this.cartService.onUpCountItem$.next(id);
  }
}
