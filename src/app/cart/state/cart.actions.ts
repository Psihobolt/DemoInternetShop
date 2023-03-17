import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { CartItem } from "src/app/model/cart.model";
import { ShoppingItem } from "src/app/model/shopping-item.model";

export enum ECartActions {
    LOAD_CART_ITEMS = '[Cart] Load Cart Items',
    LOAD_CART_ITEMS_SUCCESS = '[Cart] Load Cart Items Success',
    LOAD_CART_ITEMS_FAIL = '[Cart] Load Cart Items Fail',
    ADD_ITEM_TO_CART = '[Cart] Add Item To Cart',
    INC_COUNT_ITEM = '[Cart] Inc Count Item To Cart',
    DEC_COUNT_ITEM = '[Cart] Dec Cart Item',
    CREATE_CART_ITEM = '[Cart] Create Cart Item',
    DELETE_ITEM_TO_CART = '[Cart] Delete Item From Cart'
}

export const loadCart = createAction(ECartActions.LOAD_CART_ITEMS);
export const loadCartSuccess = createAction(ECartActions.LOAD_CART_ITEMS_SUCCESS, props<{ payload: CartItem[]}>());
export const loadCartFail = createAction(ECartActions.LOAD_CART_ITEMS_FAIL, props<Error>());
export const addToCart = createAction(ECartActions.ADD_ITEM_TO_CART, props<{ payload: ShoppingItem }>());
export const createCartItem = createAction(ECartActions.CREATE_CART_ITEM, props<{ payload: CartItem }>())
export const incCartItem = createAction(ECartActions.INC_COUNT_ITEM, props<{update: Update<CartItem>}>());
export const decToCart = createAction(ECartActions.DEC_COUNT_ITEM, props<{ update: Update<CartItem> }>());
export const deleteFromCart = createAction(ECartActions.DELETE_ITEM_TO_CART, props< { id: number } >)