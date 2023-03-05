import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  host: {
    style: 'display: contents'
  }
})
export class ImageComponent implements OnInit {
  @Input() sourceImg?: string;
  @Input() title?: string;
  @Input() maxHeight?: number

  styleImg:Record<string, string>;

  ngOnInit(){
    this.styleImg = {
      'width':'100%',
      'max-width': this.maxHeight? this.maxHeight+'px' : 'auto',
      'height':'auto'
    }
  }
}
