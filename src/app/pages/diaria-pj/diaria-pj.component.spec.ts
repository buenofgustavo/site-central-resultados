import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiariaPjComponent } from './diaria-pj.component';

describe('DiariaPjComponent', () => {
  let component: DiariaPjComponent;
  let fixture: ComponentFixture<DiariaPjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiariaPjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiariaPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
