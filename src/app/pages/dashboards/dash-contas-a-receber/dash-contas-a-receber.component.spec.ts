import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashContasAReceberComponent } from './dash-contas-a-receber.component';

describe('DashContasAReceberComponent', () => {
  let component: DashContasAReceberComponent;
  let fixture: ComponentFixture<DashContasAReceberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashContasAReceberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashContasAReceberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
