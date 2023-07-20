import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('black', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('', '');
  }

  private highlight(bgcolor: string, color: string) {
    if (this.el && this.el.nativeElement) {
      this.el.nativeElement.style.backgroundColor = bgcolor;
      this.el.nativeElement.style.color = color;
    }
  }
}
