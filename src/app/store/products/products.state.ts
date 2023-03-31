import { Loading, EStatus } from "src/app/model/loading.model";
import { ShoppingItem } from "src/app/model/shopping-item.model";

export interface ProductsState {
    list: ShoppingItem[];
    loading: Loading;
}

export const initialProductState: ProductsState = {
    list: [],
    loading: {
        status: EStatus.none,
        error: undefined
    }
}