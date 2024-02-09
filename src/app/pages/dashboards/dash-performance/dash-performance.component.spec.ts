import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPerformanceComponent } from './dash-performance.component';

describe('DashPerformanceComponent', () => {
  let component: DashPerformanceComponent;
  let fixture: ComponentFixture<DashPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
