import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject} from 'rxjs';
import { CartItem } from '../data/cart.item';
import { ShoppingItem } from '../data/shopping.item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private countItems = new BehaviorSubject(0);
  countItems$ = this.countItems.asObservable();

  private itemsCart = new BehaviorSubject<CartItem[]>([]);
  itemsCart$ = this.itemsCart.asObservable();

  private totalCart = new BehaviorSubject<number>(0);
  totalCart$ = this.totalCart.asObservable();

  onAddToCart$ = new Subject<ShoppingItem>();
  onDownCountItem$ = new Subject<number>();
  onUpCountItem$ = new Subject<number>();

  constructor() { }
  
  changeCountItems(count:number){
    this.countItems.next(count);
  }

  updateItemsCart(items:CartItem[]){
    this.itemsCart.next(items)
  }
}
