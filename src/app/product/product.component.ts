import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  host: {
    style: "display: contents"
  }
})

export class ProductComponent {
  @Input() product?:IProduct;

  constructor(private cartService: CartService) {}

  buyProduct(product:IProduct){
    if (product){
      this.cartService.addToCart(product);
    }
  }
}
