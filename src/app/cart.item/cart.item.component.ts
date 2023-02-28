import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../data/cart.item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart.item.component.html',
  styleUrls: ['./cart.item.component.css']
})
export class CartItemComponent {
  @Input() cartItem:CartItem;
  @Input() rowNum?:number;
  @Output() OnUpCountItemEvent  = new EventEmitter<number>();
  @Output() OnDownCountItemEvent  = new EventEmitter<number>();

  upCountItem(id:number):void{
    this.OnUpCountItemEvent.next(id);
  }

  downCountItem(id:number):void{
    this.OnDownCountItemEvent.next(id);
  }
}
