import { EStatus, Loading } from "../../model/loading.model";
import { ShoppingItem } from "../../model/shopping-item.model";

export interface ProductsState {
    shoppingItems: ShoppingItem[];
    selectedItem: ShoppingItem | null;
    loading: Loading;
}

export const initialProductsState: ProductsState = {
    shoppingItems: [],
    selectedItem: null,
    loading: {
        status: EStatus.none,
        error: undefined
    }
}