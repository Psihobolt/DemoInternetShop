import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductsService {
  private productUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  public getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      tap(_=>console.log('error with products')),
      catchError(this.handleError<IProduct[]>('getProducts', []))
    );
  }
}
