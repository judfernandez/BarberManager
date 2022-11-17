import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePlotThreeComponent } from './line-plot-three.component';

describe('LinePlotThreeComponent', () => {
  let component: LinePlotThreeComponent;
  let fixture: ComponentFixture<LinePlotThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinePlotThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinePlotThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
