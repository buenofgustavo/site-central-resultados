import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DahsAvariasComponent } from './dahs-avarias.component';

describe('DahsAvariasComponent', () => {
  let component: DahsAvariasComponent;
  let fixture: ComponentFixture<DahsAvariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DahsAvariasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DahsAvariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
