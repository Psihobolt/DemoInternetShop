import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-truncate',
  templateUrl: './text-truncate.component.html',
  host: {
    style: "display: contents"
  }
})
export class TextTruncateComponent {
  @Input() text: string = '';
  @Input() labelText?: string = '';
}
