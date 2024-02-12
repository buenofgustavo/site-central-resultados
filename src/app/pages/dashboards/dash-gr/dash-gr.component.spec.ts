import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashGrComponent } from './dash-gr.component';

describe('DashGrComponent', () => {
  let component: DashGrComponent;
  let fixture: ComponentFixture<DashGrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashGrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashGrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
