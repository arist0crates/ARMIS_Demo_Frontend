import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngServicosComponent } from './eng-servicos.component';

describe('EngServicosComponent', () => {
  let component: EngServicosComponent;
  let fixture: ComponentFixture<EngServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
