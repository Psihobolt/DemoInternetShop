import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "./cart.entity";
import * as fromReducer from "./cart.reducer"

export interface State {
    cartState: CartState;
  }
   
  export const reducers: ActionReducerMap<State> = {
    cartState: fromReducer.cartReducer,
  };

const appFeature = createFeatureSelector<CartState>();
export const getCartItems = createSelector(
    CartState,
    fromReducer.selectAllCartItems
);

export const getCartItemsStatusLoading = createSelector(
    appFeature,
    (state: CartState) => state.loading.status
);

export const getError = createSelector(
    appFeature,
    (state: CartState) => state.loading.error
);