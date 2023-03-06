import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  host:{
    style: "display: contents"
  }
})
export class LoadingComponent {
  constructor(private loadingService: LoadingService){}
  loading$ = this.loadingService.getStatus();
}
