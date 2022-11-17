import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentPlotComponent } from './percent-plot.component';

describe('PercentPlotComponent', () => {
  let component: PercentPlotComponent;
  let fixture: ComponentFixture<PercentPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentPlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
