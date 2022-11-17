import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePlotTwoComponent } from './pie-plot-two.component';

describe('PiePlotTwoComponent', () => {
  let component: PiePlotTwoComponent;
  let fixture: ComponentFixture<PiePlotTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiePlotTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiePlotTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
