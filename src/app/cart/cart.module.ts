import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartRoutingModule } from './cart-routing.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CartEffects } from './state/cart.effect';
import { cartReducer } from './state/cart.reducer';



@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule,
    StoreModule.forFeature("cartFeature", cartReducer),
    EffectsModule.forFeature([CartEffects])
  ]
})
export class CartModule { }
