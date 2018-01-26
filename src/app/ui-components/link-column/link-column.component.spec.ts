import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkColumnComponent } from './link-column.component';

describe('LinkColumnComponent', () => {
  let component: LinkColumnComponent;
  let fixture: ComponentFixture<LinkColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
