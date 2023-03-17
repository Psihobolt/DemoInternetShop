import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import * as cartActions from "./cart.actions";
import { getCartItems } from "./cart.selectors";
import { Store } from "@ngrx/store";
import { CartState } from "./cart.entity";
import { selectAllCartItems } from "./cart.reducer";
import { CartItem } from "src/app/model/cart.model";
import { CartService } from "src/app/services/cart.service";

@Injectable()
export class CartEffects {
    loadCartItems$ = createEffect(() => 
        this.actions$.pipe(
            ofType(cartActions.loadCart),
            exhaustMap(() => this.cartService.getAllItems()
                .pipe(
                    map((items:CartItem[]) => cartActions.loadCartSuccess({ payload: items })),
                    catchError(err => of(cartActions.loadCartFail(err))
                )
            ))));
            
    addToCart$ = createEffect(()=>
        this.actions$.pipe(
            ofType(cartActions.addToCart),
            exhaustMap(action =>
                this.store.select(getCartItems)
                    .pipe(
                        map((items:CartItem[])  => {
                            var res = undefined;
                            if (items.length > 0) 
                                res = items.find((val) => val.id === action.payload.id);
                            return res ? cartActions.incCartItem({update: {id: res.id, changes: { count: res.count + 1 }}})
                                       : cartActions.createCartItem({ payload: { id: action.payload.id, item:action.payload, count: 1 } }); 
                        })
                ))
    ));

    constructor(
        private actions$: Actions,
        private store: Store<CartState>,
        private cartService: CartService
    ) {}
}