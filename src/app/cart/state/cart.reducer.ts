import { createReducer, on } from '@ngrx/store';
import { count } from 'rxjs';
import { EStatus } from '../../model/loading.model';
import * as CartActions from './cart.actions';
import { adapter, initialCartState } from './cart.entity';

export const cartReducer = createReducer(
    initialCartState,
    on(CartActions.loadCart, (state)=>{
        return {
            ...state,
            loading:{
                status: EStatus.isLoading
            }
        }
    }),
    on(CartActions.loadCartSuccess, (state, action)=>
        adapter.setAll(action.payload, { ...state, loading: { status:EStatus.isLoaded }})
    ),
    on(CartActions.incCartItem, (state, action) => 
        adapter.updateOne(action.update, state)),
    on(CartActions.createCartItem, (state, action) => 
        adapter.addOne(action.payload, state))
)

const {
    selectIds,
    selectEntities,
    selectAll,
} = adapter.getSelectors();

export const selectCartItemIds = selectIds;
export const selectCartEntities = selectEntities;
export const selectAllCartItems = selectAll;