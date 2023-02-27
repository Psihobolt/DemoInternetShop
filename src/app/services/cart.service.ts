import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { ICartItem } from '../interfaces/cart.item';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartUrl:string = 'api/cart/'

  constructor(private http: HttpClient) { }

  getItemsCart(): Observable<ICartItem[]> {
    return this.http.get<ICartItem[]>(this.cartUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  addToCart(product: IProduct): Observable<ICartItem> {
    const cartItem:ICartItem = {
      id: 0,
      item: product
    }
    return this.http.post<ICartItem>(this.cartUrl, cartItem).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.cartUrl + id);
  }
}
