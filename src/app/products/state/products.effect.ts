import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ProductsService } from "../../services/products.service";
import * as productsActions from "./products.actions";
import { ShoppingItem } from "../../model/shopping-item.model";

@Injectable()
export class ProductsEffects {
    loadShoppingItems$ = createEffect(()=>
        this.actions$.pipe(
            ofType<productsActions.LoadShoppingItems>(productsActions.EShoppingItemsActions.LOAD_SHOPPING_ITEMS),
            exhaustMap(() => 
                this.productsService.getProducts()
                    .pipe(
                        map((items: ShoppingItem[]) =>
                            new productsActions.LoadShoppingItemsSuccess(items)
                        ),
                        catchError(err => 
                            of(new productsActions.LoadShoppingItemsFail(err))
                        )
                ))
    ));
    
    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) {}
}