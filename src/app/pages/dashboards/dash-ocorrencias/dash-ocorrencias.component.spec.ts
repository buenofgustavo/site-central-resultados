import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashOcorrenciasComponent } from './dash-ocorrencias.component';

describe('DashOcorrenciasComponent', () => {
  let component: DashOcorrenciasComponent;
  let fixture: ComponentFixture<DashOcorrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashOcorrenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashOcorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
