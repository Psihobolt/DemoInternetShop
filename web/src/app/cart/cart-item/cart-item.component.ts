import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../model/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html'
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Input() rowNum?: number;
  @Output() incCountEvent  = new EventEmitter<number>();
  @Output() decCountEvent  = new EventEmitter<number>();

  styleImg: Record<string,string> = {};
  ngOnInit(): void {
    this.styleImg = {
      'width':'100%',
      'max-width':'20px',
      'height':'auto'
    }
  }

  incCountItem():void{
    this.incCountEvent.next(this.cartItem.id);
  }

  decCountItem():void{
    this.decCountEvent.next(this.cartItem.id);
  }
}