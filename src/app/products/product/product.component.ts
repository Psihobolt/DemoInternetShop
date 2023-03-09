import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ShoppingItem } from '../../model/shopping.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  host: {
    style: "display: contents"
  }
})

export class ProductComponent implements OnInit {
  @Input() item?:ShoppingItem;
  @Output() buyItemEvent = new EventEmitter<ShoppingItem>();

  styleImg: Record<string,string> = {};
  descLabel: string = 'Description:';
  categoryLabel: string = 'Category:';
  priceLabel: string = 'Price:';

  constructor() {}
  ngOnInit(): void {
    this.styleImg = {
      'min-height': '50px', 
      'max-height': '150px'
    }
  }

  buyItem(item:ShoppingItem){
    if (item){
      this.buyItemEvent.emit(item);
    }
  }
}
