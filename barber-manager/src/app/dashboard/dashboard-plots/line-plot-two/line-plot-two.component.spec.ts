import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePlotTwoComponent } from './line-plot-two.component';

describe('LinePlotTwoComponent', () => {
  let component: LinePlotTwoComponent;
  let fixture: ComponentFixture<LinePlotTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinePlotTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinePlotTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
