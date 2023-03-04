import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  host:{
    style: "display: contents"
  }
})
export class RatingComponent {
  @Input() rate: number = 0;
  @Input() countRate?: number = 0;
}
