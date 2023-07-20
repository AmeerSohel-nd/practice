import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLoadComponent } from './child-load.component';

describe('ChildLoadComponent', () => {
  let component: ChildLoadComponent;
  let fixture: ComponentFixture<ChildLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChildLoadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
