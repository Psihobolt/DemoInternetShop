import { CartItem } from "../../model/cart.model";
import { Loading } from "../..//model/loading.model";

export interface CartState {
    cartItems: CartItem[];
    loading: Loading;
}

export const initialCartState: CartState = {
    cartItems: [],
    loading: {
        status: {
            isLoading: false,
            isLoaded: false,
            isError: false
        },
        error: {
            message: ''
        }
    }
}