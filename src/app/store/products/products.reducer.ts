import { createReducer, on, Action } from "@ngrx/store";
import { EStatus } from "src/app/model/loading.model";
import { ProductListActions } from "./products.actions";
import { initialProductState, ProductsState } from "./products.state";

export const _productsReducer = createReducer(
    initialProductState,
    on(ProductListActions.loadShoppingItems, (state) => ({
        ...state,
        list: [],
        count: 0,
        loading: {
            status: EStatus.isLoading,
            error: undefined
        }
    })),
    on(ProductListActions.loadShoppingItemsSuccess, (state, { payload }) => ({
        ...state,
        list: payload,
        count: payload.length,
        loading: {
            status: EStatus.isLoaded,
            error: undefined
        }
    })),
    on(ProductListActions.loadShoppingItemsFail, (state, action) => ({
        ...state,
        list: [],
        count: 0,
        loading: {
            status: EStatus.isFail,
            error: action
        }
    }))
)

export function productsReducer(state: ProductsState, action: Action) {
    return _productsReducer(state, action);
}