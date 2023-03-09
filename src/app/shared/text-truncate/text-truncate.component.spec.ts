import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTruncateComponent } from './text-truncate.component';

describe('TextTruncateComponent', () => {
  let component: TextTruncateComponent;
  let fixture: ComponentFixture<TextTruncateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextTruncateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextTruncateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
