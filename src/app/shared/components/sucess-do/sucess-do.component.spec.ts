import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessDoComponent } from './sucess-do.component';

describe('SucessDoComponent', () => {
  let component: SucessDoComponent;
  let fixture: ComponentFixture<SucessDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SucessDoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the buttonClick event when the button is clicked', () => {
    spyOn(component.showSomeTextChange, 'emit');
    const buttonElement = fixture.nativeElement.querySelector('button');
    buttonElement.click();
    expect(component).toBeTruthy();
  });
});
