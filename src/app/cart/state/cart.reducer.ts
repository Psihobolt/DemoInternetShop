import { Actions, ECartActions } from './cart.actions';
import { CartState, initialCartState } from './cart.state';

export const cartReducer = (
    state = initialCartState,
    action: Actions
): CartState => {
    switch(action.type) {
        case ECartActions.LOAD_CART_ITEMS:
            return { 
                ...state,
                loading: {
                    status: {
                        isLoading: true,
                        isLoaded: false,
                        isError:false
                    },
                    error: {
                        message: ''
                    }
                }
            }
        case ECartActions.LOAD_CART_ITEMS_SUCCESS:
            return { 
                ...state,
                cartItems: action.payload,
                loading: {
                    status: {
                        isLoading: false,
                        isLoaded: true,
                        isError:false
                    },
                    error: {
                        message: ''
                    }
                }
            }
        case ECartActions.LOAD_CART_ITEMS_FAIL:
            return { 
                ...state,
                cartItems: [],
                loading: {
                    status: {
                        isLoading: false,
                        isLoaded: false,
                        isError:true
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