import { ElementRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SucessDoComponent } from '../shared/components/sucess-do/sucess-do.component';
import { HighlightDirective } from './highlight.directive';

xdescribe('HighlightDirective', () => {
  const btn = document.createElement('div');
  const fixture: ComponentFixture<SucessDoComponent> = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HighlightDirective, SucessDoComponent],
      providers: [{ provide: ElementRef, useValue: btn }]
    }).compileComponents();
  }));
  it('should create an instance', () => {
    const el: ElementRef = fixture.nativeElement.querySelector('div');
    const directive = new HighlightDirective(el);
    expect(directive).toBeTruthy();
  });
});
