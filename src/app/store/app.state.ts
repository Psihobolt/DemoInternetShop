import { RouterReducerState } from "@ngrx/router-store";
import { CartState, initialCartState } from "../cart/state/cart.state";
import { initialProductsState, ProductsState } from "../products/state/products.state";

export interface AppState {
    router?: RouterReducerState,
    products: ProductsState,
    cartItems: CartState
}

export const initialAppState: AppState = {
    products: initialProductsState,
    cartItems: initialCartState
};

export function getInitialState(){
    return initialAppState;
}