import { ShoppingItem } from "./shopping-item.model";

export interface CartItem {
    id: number;
    count: number;
    item: ShoppingItem;
}