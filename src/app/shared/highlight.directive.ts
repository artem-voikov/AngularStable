import { Directive, ElementRef, Renderer, Input, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Output() isOut: boolean;
  @Output() lastArtName: string;

  private el: ElementRef;
  private renderer: Renderer;
  @Input() appHighlight: string;
  constructor(el: ElementRef, renderer: Renderer) {
    this.el = el;
    this.renderer = renderer;
  }

  @HostListener('mouseover') onmouseover() {
    const span = this.getSpan();
    if (!span)
      return null;
    this.isOut = false;
    this.renderer.setElementStyle(span, 'color', 'red');
  }

  @HostListener('mouseout') onmouseoout() {
    const span = this.getSpan();
    if (!span)
      return null;
    this.isOut = true;
    this.renderer.setElementStyle(span, 'color', '');
  }

  getSpan(): HTMLElement {
    let result: HTMLElement;

    const p = this.el.nativeElement;

    result = p.querySelector('span');

    return result;
  }

}
