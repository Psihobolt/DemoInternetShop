import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.state";

const appFeature = createFeatureSelector<ProductsState>('products');
export const getProducts = createSelector(
    appFeature,
    (state: ProductsState) => state.shoppingItems
);

export const getProductsLoadingStatus = createSelector(
    appFeature,
    (state: ProductsState) => state.loading.status
);

export const getError = createSelector(
    appFeature,
    (state: ProductsState) => state.loading.error
);