import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncButtonComponent } from './inc-button.component';

describe('IncButtonComponent', () => {
  let component: IncButtonComponent;
  let fixture: ComponentFixture<IncButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
