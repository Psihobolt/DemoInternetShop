import { ShoppingItem } from "./shopping-item.model";

export interface CartItem {
    id: number;
    item: ShoppingItem;
    count: number;
}