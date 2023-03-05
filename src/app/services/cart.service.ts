import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, map, Observable, of} from 'rxjs';
import { CartItem } from '../model/cart.model';
import { ShoppingItem } from '../model/shopping.model';

@Injectable({ providedIn: 'root' })
export class CartService implements OnDestroy {
  private itemsCart:CartItem[] = [];
  private itemsCart$ = new BehaviorSubject<CartItem[]>([]);

  constructor() { }
  ngOnDestroy(): void {
    if (this.itemsCart$)
    {
      this.itemsCart$.unsubscribe();
    }
  }

  getAllItems():Observable<CartItem[]>{
    return this.itemsCart$.asObservable();
  }

  getCountItems():Observable<number>{
    return this.itemsCart$.pipe(
      map(items => 
          items.reduce((sum, cur)=>sum+cur.count,0)
    ));
  }

  getTotal():Observable<number>{
    return this.itemsCart$.pipe(
      map(
        items => items.reduce((sum, cur) => sum + (cur.count * cur.item.price),0)
    ));
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
      this.resetValues();
    }
  }

  upCountCartItem(id:number){
    var item = this.itemsCart.find(x=>x.id == id);
    if (item) {
      item.count++;
      this.resetValues();
    }
  }

  private resetValues(){
    this.itemsCart$.next(this.itemsCart);
  }
}
