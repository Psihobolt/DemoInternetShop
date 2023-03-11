import { ShoppingItem } from "./shopping.model";

export interface CartItem {
    id: number;
    count: number;
    item: ShoppingItem;
}