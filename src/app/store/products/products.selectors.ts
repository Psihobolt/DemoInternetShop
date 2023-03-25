import { ProductsState } from "./products.state";

export const getAllProducts = (state: { products: ProductsState }) =>
  state.products.list;