import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashLogisticaComponent } from './dash-logistica.component';

describe('DashLogisticaComponent', () => {
  let component: DashLogisticaComponent;
  let fixture: ComponentFixture<DashLogisticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashLogisticaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashLogisticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
