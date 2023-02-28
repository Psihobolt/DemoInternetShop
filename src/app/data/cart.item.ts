import { ShoppingItem } from "./shopping.item";

export interface CartItem {
    id: number;
    count: number;
    item: ShoppingItem;
}