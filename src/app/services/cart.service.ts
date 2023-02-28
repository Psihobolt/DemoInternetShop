import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { ShoppingItem } from '../data/shopping.item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private items:ShoppingItem[] = [];
  constructor() { }

  getItemsCart(): Observable<ShoppingItem[]> {
    return of(this.items)
  }

  addToCart(item: ShoppingItem): number {
    item.id = this.items.length + 1;
    return this.items.push(item);
  }

  deleteFromCart(id: number): boolean {
    return delete this.items[id];
  }
}
