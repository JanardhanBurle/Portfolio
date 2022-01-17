import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { AfterViewInit, Component, OnInit } from "@angular/core";
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
            style({ transform: "scale(0.9, 1.1) translateY(-100px)" }),
            style({ transform: "scale(1.05, 0.95) translateY(0)" }),
            style({ transform: "scale(1,1) translateY(-7px)" }),
            style({ transform: "scale(1,1) translateY(0)" }),
          ])
        ),
      ]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor() {}

  bounceDivState = "initial";

  ngOnInit(): void {
    this.bounceDivState = "active";
  }

  ngAfterViewInit(): void {
    var typed = new Typed(".typing", {
      strings: [
        "Flutter Developer",
        "Angular Developer",
        "Freelancer",
        "Badminton Player",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }
}
