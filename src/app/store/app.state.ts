import { CartItem } from "../model/cart.model";
import { EStatus, Loading } from "../model/loading.model";
import { ShoppingItem } from "../model/shopping-item.model";

export interface ProductsState {
    list: ShoppingItem[];
    count: number;
    loading: Loading;
};

export const initialProductState: ProductsState = {
    list: [],
    count: 0,
    loading: {
        status: EStatus.none,
        error: undefined
    }
};

export interface CartState {
    list: CartItem[];
    count: number;
    loading: Loading;
};


export const initialCartState: CartState = {
    list: [],
    count: 0,
    loading: {
        status: EStatus.none,
        error: undefined
    }
};

export interface AppState{
    products: ProductsState;
    cartItems: CartState;
}

export const initialAppState: AppState = {
    products: initialProductState,
    cartItems: initialCartState
};

export function getInitialState(){
    return initialAppState;
};