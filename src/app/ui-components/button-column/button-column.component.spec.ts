import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonColumn } from './button-column.component';

describe('ButtonColumnComponent', () => {
  let component: ButtonColumn;
  let fixture: ComponentFixture<ButtonColumn>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonColumn ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonColumn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
