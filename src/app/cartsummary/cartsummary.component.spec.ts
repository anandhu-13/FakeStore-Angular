import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartsummaryComponent } from './cartsummary.component';

describe('CartsummaryComponent', () => {
  let component: CartsummaryComponent;
  let fixture: ComponentFixture<CartsummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartsummaryComponent]
    });
    fixture = TestBed.createComponent(CartsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
