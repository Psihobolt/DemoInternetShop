import { createReducer, on, Action } from "@ngrx/store";
import { EStatus } from "src/app/model/loading.model";
import { CartListActions } from "./cart.actions";
import { initialCartState, CartState } from "./cart.state";

export const _cartReducer = createReducer(
    initialCartState,
    on(CartListActions.loadCartItems, (state) => ({
        ...state,
        list: [],
        loading: {
            status: EStatus.isLoading
        }
    })),
    on(CartListActions.loadCartItemsSuccess, (state, { payload }) => ({
        ...state,
        list: payload,
        loading:{
            status: EStatus.isLoaded
        }
    })),
    on(CartListActions.addItemToCartSuccess, (state, { payload }) => ({
        ...state,
        list: [...state.list, { id: payload.id, count: 1, item: payload }],
        loading: { status: EStatus.none }
    })),
    on(CartListActions.incCountItemFromCart, (state, { id }) => ({
        ...state,
        list: state.list.map(x => 
            x.id == id
            ? { id: x.id, count: x.count + 1, item: x.item }
            : x),
        loading: { status: EStatus.none }
    })),
    on(CartListActions.decCountItemFromCartSuccess, (state, { id }) => ({
        ...state,
        list: state.list.map(x => 
            x.id == id
            ? { id: x.id, count: x.count - 1, item: x.item }
            : x),
        loading: { status: EStatus.none }
    })),
    on(CartListActions.deleteItemFromCart, (state, { id }) => ({
        ...state,
        list: state.list.filter((x)=> x.id !== id),
        loading: { status: EStatus.none }
    }))
);

export function cartReducer(state: CartState, action: Action) {
    return _cartReducer(state, action);
};