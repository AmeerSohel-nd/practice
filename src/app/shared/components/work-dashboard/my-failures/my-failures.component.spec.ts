import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFailuresComponent } from './my-failures.component';

describe('MyFailuresComponent', () => {
  let component: MyFailuresComponent;
  let fixture: ComponentFixture<MyFailuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyFailuresComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFailuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
