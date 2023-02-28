import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../data/shopping.item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  host: {
    style: "display: contents"
  }
})

export class ProductComponent {
  @Input() item?:ShoppingItem;
  @Output() buyItemEvent = new EventEmitter<ShoppingItem>();

  constructor() {}

  buyItem(item:ShoppingItem){
    if (item){
      this.buyItemEvent.emit(item);
    }
  }
}
