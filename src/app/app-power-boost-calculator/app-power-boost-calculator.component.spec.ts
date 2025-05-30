import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPowerBoostCalculatorComponent } from './app-power-boost-calculator.component';

describe('AppPowerBoostCalculatorComponent', () => {
  let component: AppPowerBoostCalculatorComponent;
  let fixture: ComponentFixture<AppPowerBoostCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppPowerBoostCalculatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppPowerBoostCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
