import { Injectable } from '@angular/core';
import { ShoppingItem } from '../model/shopping.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private productUrl = 'http://localhost/api/products';

  constructor(private http: HttpClient) { }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  public getProducts(): Observable<ShoppingItem[]>{
    return this.http.get<ShoppingItem[]>(this.productUrl)
    .pipe(
      retry(2),
      tap(_=>console.log('error with products')),
      catchError(this.handleError<ShoppingItem[]>('getProducts', []))
    );
  }
}
