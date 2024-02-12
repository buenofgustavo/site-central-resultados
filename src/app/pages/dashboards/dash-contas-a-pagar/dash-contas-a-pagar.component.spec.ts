import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContasAPagarComponent } from './dash-contas-a-pagar.component';

describe('DashContasAPagarComponent', () => {
  let component: DashContasAPagarComponent;
  let fixture: ComponentFixture<DashContasAPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashContasAPagarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashContasAPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
