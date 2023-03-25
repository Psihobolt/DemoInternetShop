import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { cartReducer } from './cart/cart.reducer';
import { productsReducer } from './products/products.reducer';

export const reducers: ActionReducerMap<AppState> = {
    products: productsReducer,
    cartItems: cartReducer
}