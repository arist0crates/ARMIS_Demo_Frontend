import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasFaturasComponent } from './minhas-faturas.component';

describe('MinhasFaturasComponent', () => {
  let component: MinhasFaturasComponent;
  let fixture: ComponentFixture<MinhasFaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasFaturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasFaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
