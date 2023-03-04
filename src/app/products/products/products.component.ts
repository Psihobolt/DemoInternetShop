import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../../data/shopping.item';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  host: {
    style: "display: contents"
  }
})
export class ProductsComponent implements OnInit {
  items: ShoppingItem[] = [];

  constructor(private productsService: ProductsService, 
              private cartService: CartService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(items => {
      this.items = items
    } )
  }

  addToCart(item:ShoppingItem){
    if (item){
      this.cartService.addToCart(item);
    }
  }
}
