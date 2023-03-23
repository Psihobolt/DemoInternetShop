import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './products-routing.module';
import { appReducer } from '../store/app.reducer';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductsModule { }
