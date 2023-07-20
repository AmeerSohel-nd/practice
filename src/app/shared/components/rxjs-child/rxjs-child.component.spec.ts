import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsChildComponent } from './rxjs-child.component';

describe('RxjsChildComponent', () => {
  let component: RxjsChildComponent;
  let fixture: ComponentFixture<RxjsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsChildComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
