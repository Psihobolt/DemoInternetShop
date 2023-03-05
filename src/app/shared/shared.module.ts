import { NgModule } from '@angular/core';
import { IncButtonComponent } from './inc-button/inc-button.component';
import { PriceComponent } from './price/price.component';
import { CommonModule } from '@angular/common';
import { TextTruncateComponent } from './text-truncate/text-truncate.component';
import { RatingComponent } from './rating/rating.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    IncButtonComponent,
    PriceComponent,
    TextTruncateComponent,
    RatingComponent,
    ImageComponent
  ],
  imports: [CommonModule],
  exports: [
    IncButtonComponent,
    PriceComponent,
    TextTruncateComponent,
    RatingComponent,
    ImageComponent
  ]
})
export class SharedModule { }
