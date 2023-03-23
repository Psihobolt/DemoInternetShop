 import { createSelector } from "@ngrx/store";
 import { AppState, CartState, ProductsState } from "./app.state";

export const getAllProducts = createSelector(
    (state: AppState) => state.products,
    (state: ProductsState) => state?.list
);

export const getAllCartItems = createSelector(
    (state: AppState) => state.cartItems,
    (state: CartState) => state?.list
);



// const productsFeature = (state:AppState) => state.products;
// export const getProducts = createSelector(
//     productsFeature,
//     (state: AppState) => state.products
// );

// const statusFeature = (state: AppState) => state.status;
// export const getStatus = createSelector(
//     statusFeature,
//     (state: AppState) => state.status.status
// );

// export const getError = createSelector(
//     statusFeature,
//     (state: AppState) => state.status.status
// );

// export const selectCart = (state:AppState) => state.cartItems;

// export const getCartItems = createSelector(
//   selectCart,
//   (state:CartState) => state.cartItems
// );

// export const getCartItemsStatusLoading = createSelector(
//   selectCart,
//   (state: CartState) => state.loading.status
// );

// export const getError = createSelector(
//   selectCart,
//   (state: CartState) => state.loading.error
// );