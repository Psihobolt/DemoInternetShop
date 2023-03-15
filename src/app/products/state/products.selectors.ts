import { createSelector } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { ProductsState } from "./products.state";

const appSelector = (state: AppState) => state.products;
export const getProducts = createSelector(
    appSelector,
    (state: ProductsState) => state.shoppingItems
);

export const getProductsLoading = createSelector(
    appSelector,
    (state: ProductsState) => state.loading.status.isLoading
);

export const getProductsLoaded = createSelector(
    appSelector,
    (state: ProductsState) => state.loading.status.isLoaded
);

export const getError = createSelector(
    appSelector,
    (state: ProductsState) => state.loading.error.message
);