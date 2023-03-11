import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inc-button',
  templateUrl: './inc-button.component.html',
  host: {
    style: "display: contents"
  }
})
export class IncButtonComponent {
  @Input() id: number = 0;
  @Input() value: number = 0;
  @Output() decValueEvent = new EventEmitter<number>(true);
  @Output() incValueEvent = new EventEmitter<number>(true);
  
  decValue(id:number){
    this.value--;
    this.decValueEvent.next(id);
  }

  incValue(id:number){
    this.value++;
    this.incValueEvent.next(id);
  }
}
