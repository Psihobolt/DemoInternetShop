import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
import { ShoppingItem } from '../../model/shopping.model';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  host: {
    style: "display: contents"
  }
})
export class ProductListComponent implements OnInit {
  items: ShoppingItem[] = [];

  constructor(private productsService: ProductsService, 
              private cartService: CartService,
              private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loadingService.showLoading();
    this.productsService.getProducts().subscribe(items => {
      this.items = items
      this.loadingService.hideLoading();
    } )
  }

  addToCart(item:ShoppingItem){
    if (item){
      this.cartService.addToCart(item);
    }
  }
}
