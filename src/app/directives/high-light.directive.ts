import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  @Input() appHighLight = '';
  @Input() defaultV = '';
  constructor(private el: ElementRef<HTMLDivElement>) {
    this.highLight('yellow');
  }
  @HostListener('mouseenter') onEnter() {
    console.log(this.appHighLight);
    console.log(this.defaultV);

    this.highLight('red');
  }

  @HostListener('mouseleave') onLeave() {
    this.highLight('');
  }

  private highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
