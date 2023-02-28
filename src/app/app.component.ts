import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingItem } from './data/shopping.item';
import { CartService } from './services/cart.service';
import { Observable, of, Subscription } from 'rxjs';
import { CartItem } from './data/cart.item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'DemoInternetShop';
  countItemsCart:number = 0;

  onAddToCartSub: Subscription;
  onDownCountCartItemSub: Subscription;
  onUpCountCartItemSub: Subscription;
  private itemsCart:CartItem[] = [];
  
  constructor(private cartService: CartService) {
    this.onAddToCartSub = this.cartService.onAddToCart$
        .subscribe($event => {
          this.addToCart($event);
        });
    this.onDownCountCartItemSub = this.cartService.onDownCountItem$
        .subscribe($event => {
          this.downCountCartItem($event);
        });
    this.onUpCountCartItemSub = this.cartService.onUpCountItem$
        .subscribe($event => {
          this.upCountCartItem($event);
        });
  }

  ngOnInit(): void {
    this.cartService.countItems$
        .subscribe(count=>this.countItemsCart = count);
  }

  ngOnDestroy(): void {
    if (this.onAddToCartSub) {
      this.onAddToCartSub.unsubscribe();
    }
    if (this.onDownCountCartItemSub) {
      this.onDownCountCartItemSub.unsubscribe();
    }
    if (this.onUpCountCartItemSub) {
      this.onUpCountCartItemSub.unsubscribe();
    }
  }

  addToCart(item:ShoppingItem){
    if (item){
      var newItem = this.itemsCart.filter(itemsCart=>itemsCart.item == item)[0];
      if (newItem){
        newItem.count++;
      } else {
        var maxId = 1;
        if (this.itemsCart.length != 0) {
          maxId = Math.max.apply(null, this.itemsCart.map(item => item.id));
        }
        newItem = {
          id: maxId + 1,
          count: 1,
          item: item
        }
        this.itemsCart.push(newItem);
        console.log(newItem);
      }
      this.resetValues();
    };
  }

  downCountCartItem(id:number){
    var item = this.itemsCart.find(x=>x.id == id);
    if (item){
      item.count--;
      if (item.count <= 0){
        var index = this.itemsCart.indexOf(item);
        delete this.itemsCart[index];
      }
    }
    this.resetValues();
  }

  upCountCartItem(id:number){
    var item = this.itemsCart.find(x=>x.id == id);
    if (item) {
      item.count++;
    }
    this.resetValues();
  }

  private getCountItems():number{
    return this.itemsCart.reduce((count, cur) => count + cur.count, 0);
  }

  private resetValues(){
    this.cartService.changeCountItems(this.getCountItems());
    this.cartService.updateItemsCart(this.itemsCart);
  }
}
