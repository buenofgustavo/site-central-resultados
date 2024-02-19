import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComparacaoFaturamentoComponent } from './dash-comparacao-faturamento.component';

describe('DashComparacaoFaturamentoComponent', () => {
  let component: DashComparacaoFaturamentoComponent;
  let fixture: ComponentFixture<DashComparacaoFaturamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashComparacaoFaturamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashComparacaoFaturamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
