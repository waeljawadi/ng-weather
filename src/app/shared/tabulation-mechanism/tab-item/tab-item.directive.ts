import { Directive, ElementRef, Input, TemplateRef } from "@angular/core";

@Directive({
  selector: "tab-item",
})
export class TabItemDirective {
  @Input()
  title: string | TemplateRef<any>;

  constructor(public elementRef: ElementRef) {
  }
}
