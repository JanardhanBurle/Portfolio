import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
declare var Typed: any;

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
  animations: [
    trigger("bounce", [
      transition("* => active", [
        animate(
          "3s",
          keyframes([
            style({ transform: "scale(0.9, 1.1) translateX(-50%)" }),
            style({ transform: "scale(1, 0.95) translateY(0)" }),
            style({ transform: "scale(1,1) translateX(-10px)" }),
            style({ transform: "scale(1,1) translateX(0)" }),
          ])
        ),
      ]),
    ]),
    trigger("slideIn", [
      state("void", style({ transform: "translateX(100px)" })),
      transition(":enter", [animate(500)]),
    ]),
    trigger("hideShow", [
      state("true", style({ opacity: 0 })),
      transition("0 => 1", animate(300)),
    ]),
    trigger("fade", [
      state("void", style({ opacity: 0 })),
      transition(":enter", [animate(1000)]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor() {}
  @ViewChild("htmlContent") htmlContent: any;
  bounceDivState = "initial";
  showContent = false;
  ngOnInit(): void {
    this.bounceDivState = "active";
  }

  ngAfterViewInit(): void {
    var typed = new Typed(".intro", {
      strings: [this.htmlContent.nativeElement.innerHTML],
      typeSpeed: 15,
      backSpeed: 5,
      showCursor: false,
      loop: false,
    });
  }
}
