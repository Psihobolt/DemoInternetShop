import { CartItem } from "src/app/model/cart.model";
import { Loading, EStatus } from "src/app/model/loading.model";

export interface CartState {
    list: CartItem[];
    loading: Loading;
}


export const initialCartState: CartState = {
    list: [],
    loading: {
        status: EStatus.none,
        error: undefined
    }
}