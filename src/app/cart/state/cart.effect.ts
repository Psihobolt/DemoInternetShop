import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { CartService } from "../../services/cart.service";
import * as cartActions from "./cart.actions";
import { CartItem } from "../../model/cart.model";

@Injectable()
export class CartEffects {
    loadCartItems$ = createEffect(()=>
        this.actions$.pipe(
            ofType<cartActions.LoadCart>(cartActions.ECartActions.LOAD_CART_ITEMS),
            exhaustMap(() => 
                this.cartService.getAllItems()
                    .pipe(
                        map((cartItems: CartItem[]) =>
                            new cartActions.LoadCartSuccess(cartItems)
                        ),
                        catchError(err => 
                            of(new cartActions.LoadCartFail(err))
                        )
                ))
    ));
    
    constructor(
        private actions$: Actions,
        private cartService: CartService
    ) {}
}