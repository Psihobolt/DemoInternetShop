import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';
import { EStatus } from '../model/loading.model';
import * as Actions from './app.actions';
import { AppState, initialAppState } from './app.state';

export const appReducer = createReducer(
    initialAppState,
    on(Actions.loadProducts, (state) => {
        return { 
            ...state,
            loading: {
                status: EStatus.isLoading,
                error: undefined
            }
        }
    }),
    on(Actions.loadProductsSuccess, (state, { payload }) => {
        return { 
            ...state,
            products: { 
                list: payload,
                count: payload.length,
                loading: {
                    status: EStatus.isLoaded,
                    error: undefined
                }
            },
            cartItems: state.cartItems
        }
    }),
    on(Actions.loadProductsFail, (state, action) => {
        return { 
            ...state,
            products: {  
                list: [],
                count: 0,
                loading: {
                    status: EStatus.isFail,
                    error: action
                }
            }
        }
    }),
    on(Actions.loadCart, (state)=>{
        return {
            ...state,
            loading: {
                status: EStatus.isLoading
            }
        }
    }),
    on(Actions.loadCartSuccess, (state, { payload }) => {
        return {
            ...state,
            products: { 
                list: state.products.list,
                count: state.products.count,
                loading: state.products.loading 
            },
            cartItems: {
                list: payload,
                count: payload.reduce((sum, cur) => sum + (cur.count * cur.item.price),0),
                loading:{
                    status: EStatus.isLoaded
                }
            }
        }
    }),
    on(Actions.addToCart, (state, action) => {
        return {
            ...state,
            loading: { status: EStatus.none }
        }
     })//,
    // on(Actions.incCartItem, (state, action) =>{
    //     const update = state.cartItems.map((value) => value.id === action.payload.id ? { ...value, count: value.count++ } : value);
    //     return {
    //         ...state,
    //         cartItems: update,
    //         loading: { status: EStatus.none }
    //     }
    // }),
    // on(Actions.createCartItem, (state, action) => {
    //     const update = state.cartItems.map((value) => value.id === action.payload.id ? { ...value, count: value.count-- } : value);
    //     return {
    //         ...state,
    //         cartItems: update,
    //         loading: { status: EStatus.none }
    //     }
    // }),
    // on(Actions.deleteFromCart, (state, action) => {
    //     if (state.cartItems.find((x)=> x.id === action.id)) {
    //         delete state.cartItems[action.id];
    //     }
    //     return {
    //         ...state,
    //         loading: { status: EStatus.none }
    //     }
    // })
);

export function AppReducer(state: AppState, action: Action) {
    return appReducer(state, action);
};