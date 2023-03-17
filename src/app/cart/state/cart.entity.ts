import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { CartItem } from "src/app/model/cart.model";
import { EStatus, Loading } from "src/app/model/loading.model";

export interface CartState extends EntityState<CartItem> {
    loading: Loading;
};

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
    selectId: (state: CartItem) => state.id
});

export const initialCartState: CartState = adapter.getInitialState({
    ids: [],
    entities: {},
    loading: { 
        status: EStatus.none,
        error: undefined
    }
});