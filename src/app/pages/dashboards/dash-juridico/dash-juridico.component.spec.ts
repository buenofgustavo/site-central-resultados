import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashJuridicoComponent } from './dash-juridico.component';

describe('DashJuridicoComponent', () => {
  let component: DashJuridicoComponent;
  let fixture: ComponentFixture<DashJuridicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashJuridicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashJuridicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
