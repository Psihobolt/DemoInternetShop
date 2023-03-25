import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { map, withLatestFrom } from "rxjs";
import { AppState } from "../app.state";
import { CartListActions } from "./cart.actions";
import { getAllCartItems } from "./cart.selectors";

@Injectable()
export class CartEffects {
    addToCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartListActions.addItemToCart),
            withLatestFrom(this.store.pipe(select(getAllCartItems))),
            map(([action, items]) => {
                return items.find((val) => val.item.id === action.payload.id) 
                       ? CartListActions.incCountItemFromCart({ id: action.payload.id })
                       : CartListActions.addItemToCartSuccess({ payload: action.payload})
            })
    ));

    decCountCartItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartListActions.decCountItemFromCart),
            withLatestFrom(this.store.pipe(select(getAllCartItems))),
            map(([action, items]) => {
                return items.find((val) => val.item.id === action.id).count <= 1 
                       ? CartListActions.deleteItemFromCart({ id: action.id })
                       : CartListActions.decCountItemFromCartSuccess({ id: action.id })
            })
        ));
    
    constructor(
        private actions$: Actions,
        private store: Store<AppState>
    ) {}
}