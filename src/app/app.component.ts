import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";
declare var AOS: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("bounce", [
      transition("* => active", [
        animate(
          "3s",
          keyframes([
            style({ transform: "scale(0.9, 1.1) translateY(-200px)" }),
            style({ transform: "scale(1, 0.95) translateY(0)" }),
            style({ transform: "scale(1,1) translateY(-50px)" }),
            style({ transform: "scale(1,1) translateY(0)" }),
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
export class AppComponent {}
