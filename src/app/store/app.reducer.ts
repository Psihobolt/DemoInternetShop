import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { cartReducer } from '../cart/state/cart.reducer';
import { productsReducer } from '../products/state/products.reducer';
import { AppState } from './app.state';

export const appReducers: ActionReducerMap<AppState, any> = {
    router: routerReducer,
    products: productsReducer,
    cartItems: cartReducer
}