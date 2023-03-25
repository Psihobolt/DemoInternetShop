import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { ShoppingItem } from "src/app/model/shopping-item.model";
import { ProductsService } from "src/app/services/products.service";
import { ProductListActions } from "./products.actions";

@Injectable()
export class ProductsEffects {
    loadShoppingItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProductListActions.loadShoppingItems),
            exhaustMap(() => 
                this.productsService.getProducts()
                    .pipe(
                        map((items: ShoppingItem[]) =>
                            ProductListActions.loadShoppingItemsSuccess({ payload: items })),
                        catchError(err => of(ProductListActions.loadShoppingItemsFail(err)))
                ))
    ));
            
    constructor(
        private actions$: Actions,
        private productsService: ProductsService
    ) {}
}