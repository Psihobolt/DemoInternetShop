import { Action } from "@ngrx/store";
import { CartItem } from "../../model/cart.model";

export enum ECartActions {
    LOAD_CART_ITEMS = '[Cart] Load Cart Items',
    LOAD_CART_ITEMS_SUCCESS = '[Cart] Load Cart Items Success',
    LOAD_CART_ITEMS_FAIL = '[Cart] Load Cart Items Fail'
}

export class LoadCart implements Action{
    readonly type = ECartActions.LOAD_CART_ITEMS;
}

export class LoadCartSuccess implements Action{
    readonly type = ECartActions.LOAD_CART_ITEMS_SUCCESS;

    constructor(public payload: CartItem[]){}
}

export class LoadCartFail implements Action{
    readonly type = ECartActions.LOAD_CART_ITEMS_FAIL;

    constructor(public payload: string){}
}

export type Actions 
 = LoadCart 
 | LoadCartSuccess 
 | LoadCartFail;