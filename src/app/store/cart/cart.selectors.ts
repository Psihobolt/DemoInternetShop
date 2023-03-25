import { createSelector } from "@ngrx/store";
import { CartState } from "./cart.state";

export const getAllCartItems = (state: { cartItems: CartState }) =>
  state.cartItems.list;

export const getTotalCartItems = createSelector(
    (state: { cartItems: CartState }) => state.cartItems,
    state => state.list.reduce((total, item) => total + item.count * item.item.price, 0)
);

export const getCountCartItems = createSelector(
    (state: { cartItems: CartState }) => state.cartItems,
    state => state.list.reduce((total, item) => total + item.count, 0)
);