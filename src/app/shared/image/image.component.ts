import { Component, Host, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: '<img [src]="sourceImg" class="img-fluid rounded-start" [alt]="title">',
  host: {
    style: 'display: contents'
  }
})
export class ImageComponent {
  @Input() sourceImg?: string;
  @Input() title?: string;
}
