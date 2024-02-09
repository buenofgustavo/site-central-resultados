import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEmissaoDocsComponent } from './dash-emissao-docs.component';

describe('DashEmissaoDocsComponent', () => {
  let component: DashEmissaoDocsComponent;
  let fixture: ComponentFixture<DashEmissaoDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashEmissaoDocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashEmissaoDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
