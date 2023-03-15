import { createSelector } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { CartState } from "./cart.state";

const appSelector = (state: AppState) => state.cartItems;
export const getCartItems = createSelector(
    appSelector,
    (state: CartState) => state.cartItems
);

export const getCartItemsLoading = createSelector(
    appSelector,
    (state: CartState) => state.loading.status.isLoading
);

export const getCartItemsLoaded = createSelector(
    appSelector,
    (state: CartState) => state.loading.status.isLoaded
);

export const getError = createSelector(
    appSelector,
    (state: CartState) => state.loading.error.message
);