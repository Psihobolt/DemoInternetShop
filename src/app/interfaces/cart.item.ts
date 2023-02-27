import { IProduct } from "./product";

export interface ICartItem{
    id?: number;
    item: IProduct;
}