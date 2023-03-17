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
import { cartReducer } from './cart/state/cart.reducer';
import { CartEffects } from './cart/state/cart.effect';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ cart: cartReducer }),
    EffectsModule.forRoot(CartEffects),
    StoreDevtoolsModule.instrument({autoPause: true, trace:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
