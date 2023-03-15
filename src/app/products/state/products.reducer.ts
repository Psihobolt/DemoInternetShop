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
                    status: {
                        isLoading: true,
                        isLoaded: false,
                        isError: false
                    },
                    error: {
                        message: ''
                    }
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEMS_SUCCESS:
            return { 
                ...state,
                shoppingItems: action.payload,
                selectedItem: null,
                loading: {
                    status: {
                        isLoading: false,
                        isLoaded: true,
                        isError: false
                    },
                    error: {
                        message: ''
                    }
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEMS_FAIL:
            return { 
                ...state,
                shoppingItems: [],
                selectedItem: null,
                loading: {
                    status: {
                        isLoading: false,
                        isLoaded: false,
                        isError: true
                    },
                    error: {
                        message: action.payload
                    }
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEM:
            return { 
                ...state,
                loading: {
                    status: {
                        isLoading: true,
                        isLoaded: false,
                        isError: false
                    },
                    error: {
                        message: ''
                    }
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEM_SUCCESS:
            return { 
                ...state,
                shoppingItems: [],
                selectedItem: action.payload,
                loading: {
                    status: {
                        isLoading: false,
                        isLoaded: true,
                        isError: false
                    },
                    error: {
                        message: ''
                    }
                }
            }
        case EShoppingItemsActions.LOAD_SHOPPING_ITEM_FAIL:
            return { 
                ...state,
                shoppingItems: [],
                selectedItem: null,
                loading: {
                    status: {
                        isLoading: false,
                        isLoaded: false,
                        isError: true
                    },
                    error: {
                        message: action.payload
                    }
                }
            }
        default: 
            return state;
    }
}