import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ShoppingItem } from "src/app/model/shopping-item.model";

export const ProductListActions = createActionGroup({
    source: 'Product List',
    events: {
      'Load Shopping Items': emptyProps(),
      'Load Shopping Items Success': props<{ payload: ShoppingItem[] }>(),
      'Load Shopping Items Fail': props<Error>(),
    }
});