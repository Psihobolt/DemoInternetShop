import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { CartItem } from "../../model/cart.model";

export interface State extends EntityState<CartItem> {
    selectedCartId: number | null;
}
 
export function selectCartItemId(a: CartItem): number {
    return a.id;
}

export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>({
    selectId: selectCartItemId
});