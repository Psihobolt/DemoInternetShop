import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CartItem } from "src/app/model/cart.model";
import { ShoppingItem } from "src/app/model/shopping-item.model";

export const CartListActions = createActionGroup({
    source: 'Cart List',
    events: {
      'Load Cart Items': emptyProps(),
      'Load Cart Items Success': props<{ payload: CartItem[] }>(),
      'Load Shopping Items Fail': props<Error>(),
      'Add Item To Cart': props<{ payload: ShoppingItem }>(),
      'Add Item To Cart Success': props<{ payload: ShoppingItem }>(),
      'Inc Count Item From Cart': props<{ id: number }>(),
      'Dec Count Item From Cart Success': props<{ id: number }>(),
      'Dec Count Item From Cart': props<{ id: number }>(),
      'Delete Item From Cart': props<{ id: number }>()
    }
});