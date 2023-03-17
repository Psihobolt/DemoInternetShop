import { EStatus } from 'src/app/model/loading.model';
import { Actions, EShoppingItemsActions } from './products.actions';
import { ProductsState, initialProductsState } from './products.state';

export const productsReducer = (
    state = initialProductsState,
    action: Actions
): ProductsState => {
    switch(action.type) {
        case EShoppingItemsActions.LOAD_SHOPPING_ITEMS:
            return { 
                ...state,
                loading: {
                    status: EStatus.isLoading,
                    error: undefined
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEMS_SUCCESS:
            return { 
                ...state,
                shoppingItems: action.payload,
                selectedItem: null,
                loading: {
                    status: EStatus.isLoaded,
                    error: undefined
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEMS_FAIL:
            return { 
                ...state,
                shoppingItems: [],
                selectedItem: null,
                loading: {
                    status: EStatus.isFail,
                    error: action.payload
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEM:
            return { 
                ...state,
                loading: {
                    status: EStatus.isLoading,
                    error: undefined
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEM_SUCCESS:
            return { 
                ...state,
                shoppingItems: [],
                selectedItem: action.payload,
                loading: {
                    status: EStatus.isLoaded,
                    error: undefined
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEM_FAIL:
            return { 
                ...state,
                shoppingItems: [],
                selectedItem: null,
                loading: {
                    status: EStatus.isFail,
                    error: action.payload
                }
            }
        default: 
            return state;
    }
}