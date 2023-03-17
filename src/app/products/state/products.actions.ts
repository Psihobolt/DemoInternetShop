import { Action } from "@ngrx/store";
import { ShoppingItem } from "../../model/shopping-item.model";

export enum EShoppingItemsActions {
    LOAD_SHOPPING_ITEMS = '[ShoppingItem] Load Shopping Items',
    LOAD_SHOPPING_ITEMS_SUCCESS = '[ShoppingItem] Load Shopping Items Success',
    LOAD_SHOPPING_ITEMS_FAIL = '[ShoppingItem] Load Shopping Items Fail',
    LOAD_SHOPPING_ITEM = '[ShoppingItem] Load Shopping Item',
    LOAD_SHOPPING_ITEM_SUCCESS = '[ShoppingItem] Load Shopping Item Success',
    LOAD_SHOPPING_ITEM_FAIL = '[ShoppingItem] Load Shopping Item Fail'
}

export class LoadShoppingItems implements Action{
    readonly type = EShoppingItemsActions.LOAD_SHOPPING_ITEMS;
}

export class LoadShoppingItemsSuccess implements Action{
    readonly type = EShoppingItemsActions.LOAD_SHOPPING_ITEMS_SUCCESS;

    constructor(public payload: ShoppingItem[]){}
}

export class LoadShoppingItemsFail implements Action{
    readonly type = EShoppingItemsActions.LOAD_SHOPPING_ITEMS_FAIL;

    constructor(public payload: Error){}
}

export class LoadShoppingItem implements Action{
    readonly type = EShoppingItemsActions.LOAD_SHOPPING_ITEM;
}

export class LoadShoppingItemSuccess implements Action{
    readonly type = EShoppingItemsActions.LOAD_SHOPPING_ITEM_SUCCESS;

    constructor(public payload: ShoppingItem){}
}

export class LoadShoppingItemFail implements Action{
    readonly type = EShoppingItemsActions.LOAD_SHOPPING_ITEM_FAIL;

    constructor(public payload: Error){}
}

export type Actions 
 = LoadShoppingItems 
 | LoadShoppingItemsSuccess 
 | LoadShoppingItemsFail
 | LoadShoppingItem 
 | LoadShoppingItemSuccess 
 | LoadShoppingItemFail;