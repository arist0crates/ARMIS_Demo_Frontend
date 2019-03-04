import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturasPendentesComponent } from './faturas-pendentes.component';

describe('FaturasPendentesComponent', () => {
  let component: FaturasPendentesComponent;
  let fixture: ComponentFixture<FaturasPendentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturasPendentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturasPendentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
