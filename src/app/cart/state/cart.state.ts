import { CartItem } from "../../model/cart.model";
import { EStatus, Loading } from "../..//model/loading.model";

export interface CartState {
    cartItems: CartItem[];
    loading: Loading;
}

export const initialCartState: CartState = {
    cartItems: [],
    loading: {
        status: EStatus.none,
        error: undefined
    }
}