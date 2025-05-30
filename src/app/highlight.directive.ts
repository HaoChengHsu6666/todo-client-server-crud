import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // 允許父元件用 [appHighlight] 傳進 highlightColor 值
  @Input('appHighlight') highlightColor!: string;

  constructor(private el: ElementRef) { }

  // 滑鼠移入時套用顏色
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }

  // 滑鼠移出時移除顏色
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
