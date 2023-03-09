import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: 'price.component.html',
  host: {
    style: "display: contents"
  }
})
export class PriceComponent {
  @Input() price:number = 0;
  @Input() labelText?:string;
}
