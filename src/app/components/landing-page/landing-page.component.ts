import {
  animate,
  keyframes,
  state,
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

  bounceDivState = "initial";
  showContent = false;
  ngOnInit(): void {
    this.bounceDivState = "active";
  }

  ngAfterViewInit(): void {
    var typed = new Typed(".intro", {
      strings: [
        `Hello there, 
        <br> My name is 
        <span style="font-size: 22px;color:#00498c;font-weight:bold;margin-left:10px"> Janardhanarao Burle</span>
        <br> And I'm <br>
        <div style="display: flex;
        align-items: center;
        color:#0a65c2;
        margin:10px 0;
        font-size:20px;
        font-weight: 500;">
        <img style="margin-right: 10px;" src="assets/images/angular.svg" height="25" alt=""> <span style="margin-right:10px">Angular</span> | 
        <img style="margin-right: 10px;margin-left: 10px;" src="assets/images/flutter.svg" height="25" alt=""> Flutter Developer</div>
        `,
      ],
      typeSpeed: 40,
      backSpeed: 40,
      showCursor: false,
      loop: false,
    });
  }
}
