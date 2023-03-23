import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCart } from './store/app.actions';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'DemoInternetShop';
  
  constructor(private store:Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadCart());
  }
}
