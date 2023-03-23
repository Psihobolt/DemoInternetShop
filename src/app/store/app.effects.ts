import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ShoppingItem } from "../model/shopping-item.model";
import { ProductsService } from "../services/products.service";
import * as appActions from "./app.actions";

@Injectable()
export class AppEffects {
    loadShoppingItems$ = createEffect(()=>
        this.actions$.pipe(
            ofType(appActions.loadProducts),
            exhaustMap(() => 
                this.productsService.getProducts()
                    .pipe(
                        map((items: ShoppingItem[]) =>
                            appActions.loadProductsSuccess({ payload: items })),
                        catchError(err => of(appActions.loadCartFail(err)))
                ))
    ));
            
    // addToCart$ = createEffect(()=>
    //     this.actions$.pipe(
    //         ofType(appActions.addToCart),
    //         exhaustMap(action =>
    //             this.store
    //                 .pipe(
    //                     select(cartSelectors.getCartItems),
    //                     map((items)  => {
    //                         var res = items.find((val) => val.item.id === action.payload.id);
    //                         return res ? cartActions.incCartItem({ payload: res })
    //                                    : cartActions.createCartItem({ payload: action.payload}); 
    //                     })
    //             ))
    // ));
    
    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) {}
}