import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaloonsComponent } from './saloons.component';

describe('SaloonsComponent', () => {
  let component: SaloonsComponent;
  let fixture: ComponentFixture<SaloonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaloonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaloonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
