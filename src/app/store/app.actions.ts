import { createAction, props } from "@ngrx/store";
import { CartItem } from "src/app/model/cart.model";
import { ShoppingItem } from "src/app/model/shopping-item.model";

export enum EAppActions {
    LOAD_SHOPPING_ITEMS = '[ShoppingItem] Load Shopping Items',
    LOAD_SHOPPING_ITEMS_SUCCESS = '[ShoppingItem] Load Shopping Items Success',
    LOAD_SHOPPING_ITEMS_FAIL = '[ShoppingItem] Load Shopping Items Fail',
    LOAD_SHOPPING_ITEM = '[ShoppingItem] Load Shopping Item',
    LOAD_SHOPPING_ITEM_SUCCESS = '[ShoppingItem] Load Shopping Item Success',
    LOAD_SHOPPING_ITEM_FAIL = '[ShoppingItem] Load Shopping Item Fail',
    LOAD_CART_ITEMS = '[Cart] Load Cart Items',
    LOAD_CART_ITEMS_SUCCESS = '[Cart] Load Cart Items Success',
    LOAD_CART_ITEMS_FAIL = '[Cart] Load Cart Items Fail',
    ADD_ITEM_TO_CART = '[Cart] Add Item To Cart',
    INC_COUNT_ITEM = '[Cart] Inc Count Item To Cart',
    DEC_COUNT_ITEM = '[Cart] Dec Cart Item',
    CREATE_CART_ITEM = '[Cart] Create Cart Item',
    DELETE_ITEM_TO_CART = '[Cart] Delete Item From Cart'
}

export const loadProducts = createAction(EAppActions.LOAD_SHOPPING_ITEMS);
export const loadProductsSuccess = createAction(EAppActions.LOAD_SHOPPING_ITEMS_SUCCESS, props<{ payload: ShoppingItem[] }>());
export const loadProductsFail = createAction(EAppActions.LOAD_SHOPPING_ITEMS_FAIL, props<Error>());
export const loadCart = createAction(EAppActions.LOAD_CART_ITEMS);
export const loadCartSuccess = createAction(EAppActions.LOAD_CART_ITEMS_SUCCESS, props<{ payload: CartItem[]}>());
export const loadCartFail = createAction(EAppActions.LOAD_CART_ITEMS_FAIL, props<Error>());
export const addToCart = createAction(EAppActions.ADD_ITEM_TO_CART, props<{ payload: ShoppingItem }>());
export const createCartItem = createAction(EAppActions.CREATE_CART_ITEM, props<{ payload: ShoppingItem }>())
export const incCartItem = createAction(EAppActions.INC_COUNT_ITEM, props<{ payload: CartItem }>());
export const decToCart = createAction(EAppActions.DEC_COUNT_ITEM, props<{ payload: CartItem }>());
export const deleteFromCart = createAction(EAppActions.DELETE_ITEM_TO_CART, props<{ id: number }>())