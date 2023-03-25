import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { metaReducers } from './store/hydration/hydration.reducer';
import { HydrationEffects } from './store/hydration/hydration.effects';
import { CartEffects } from './store/cart/cart.effects';
import { ProductsEffects } from './store/products/products.effects';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProductsEffects, CartEffects, HydrationEffects]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal}),
    StoreDevtoolsModule.instrument({autoPause: true, trace:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
