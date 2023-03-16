import { Action, createAction, props } from "@ngrx/store";
import { CartItem } from "../../model/cart.model";

export enum ECartActions {
    LOAD_CART_ITEMS = '[Cart] Load Cart Items',
    LOAD_CART_ITEMS_SUCCESS = '[Cart] Load Cart Items Success',
    LOAD_CART_ITEMS_FAIL = '[Cart] Load Cart Items Fail',
    ADD_ITEM_TO_CART = '[Cart] Add Item To Cart'
}

export const loadCart = createAction(ECartActions.LOAD_CART_ITEMS, props<{ items: CartItem[] }>());
export const loadCartSuccess = createAction(ECartActions.LOAD_CART_ITEMS_SUCCESS, props<{ items: CartItem[] }>());
export const loadCartFail = createAction(ECartActions.LOAD_CART_ITEMS_FAIL, props<Error>);
export const addToCart = createAction(ECartActions.ADD_ITEM_TO_CART, props<{ item: CartItem }>());