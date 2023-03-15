import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { ProductsState } from "./products.state";

const appFeature = createFeatureSelector<AppState, ProductsState>('products');
export const getProducts = createSelector(
    appFeature,
    (state: ProductsState) => state.shoppingItems
);

export const getProductsLoading = createSelector(
    appFeature,
    (state: ProductsState) => state.loading.status.isLoading
);

export const getProductsLoaded = createSelector(
    appFeature,
    (state: ProductsState) => state.loading.status.isLoaded
);

export const getError = createSelector(
    appFeature,
    (state: ProductsState) => state.loading.error.message
);