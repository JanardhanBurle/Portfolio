import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBlurOnHover]",
})
export class BlurOnHoverDirective {
  @Input() appBlurOnHover: string = "";
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseover") onMouseOver() {
    let part = this.el.nativeElement.parentElement.children;
    for (let item of part) {
      this.renderer.setStyle(item, "opacity", "0.2");
      this.renderer.setStyle(item, "width", "170px");
      this.renderer.setStyle(item, "height", "150px");
      console.log(item.id);
    }
    this.renderer.setStyle(this.el.nativeElement, "opacity", "1");
    this.renderer.setStyle(this.el.nativeElement, "width", "220px");
    this.renderer.setStyle(this.el.nativeElement, "height", "220px");
    this.renderer.setStyle(this.el.nativeElement, "transition", "0.3s");
    this.renderer.setStyle(
      this.el.nativeElement,
      "box-shadow",
      "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)"
    );
  }

  @HostListener("mouseout") onMouseOut() {
    let part = this.el.nativeElement.parentElement.children;
    for (let item of part) {
      this.renderer.setStyle(item, "opacity", "1");
      this.renderer.setStyle(item, "width", "200px");
      this.renderer.setStyle(item, "height", "200px");
      this.renderer.setStyle(item, "box-shadow", "none");
    }
  }
}
