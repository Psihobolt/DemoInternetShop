import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../model/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  host: {
    style: "display: contents"
  }
})
export class CartListComponent implements OnInit {
  itemsCart:CartItem[] = [];
  totalCart:number = 0;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getAllItems().subscribe(items => {
      this.itemsCart = items;
      this.totalCart = this.itemsCart
        .reduce((total, item)=>total + item.count * item.item.price, 0);
    } );
  }

  downCountItem(id:number){
    this.cartService.downCountCartItem(id);
  }

  upCountItem(id:number){
    this.cartService.upCountCartItem(id);
  }
}
