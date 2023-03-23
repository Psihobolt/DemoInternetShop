/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideState, provideStore } from '@ngrx/store';

import { AppModule } from './app/app.module';
import { appReducer } from './app/store/app.reducer';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
