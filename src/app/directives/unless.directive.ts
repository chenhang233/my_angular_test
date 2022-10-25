import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  private hasView = true;
  constructor(
    private el: TemplateRef<HTMLParagraphElement>,
    private content: ViewContainerRef
  ) {}
  @Input()
  set appUnless(f: boolean) {
    console.log(f);

    if (this.hasView && f) {
      this.content.createEmbeddedView(this.el);
      this.hasView = true;
    } else if (!this.hasView && !f) {
      this.content.clear();
      this.hasView = false;
    }
  }
}
