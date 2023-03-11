import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService implements OnInit{
  private loading: boolean = false;
  loading$ = new BehaviorSubject<boolean>(this.loading);
  constructor() { }

  ngOnInit(): void {
    this.loading$.subscribe((data)=>
      this.loading = data
    );
  }

  getStatus() {
    return this.loading$.asObservable();
  }

  showLoading(){
    this.loading$.next(true);
  }

  hideLoading(){
    this.loading$.next(false);
  }
}
