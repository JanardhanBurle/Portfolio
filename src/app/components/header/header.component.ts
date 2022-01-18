import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
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
export class HeaderComponent implements OnInit {
  constructor() {}
  bounceDivState = "initial";
  routerLinks = [
    {
      path: "home",
      label: "Home",
    },
    {
      path: "about-me",
      label: "About Me",
    },
    {
      path: "experience",
      label: "Experience",
    },
    {
      path: "projects",
      label: "Projects",
    },
    {
      path: "skills",
      label: "Skills",
    },
    {
      path: "education",
      label: "Education",
    },
    {
      path: "contact-me",
      label: "Contact Me",
    },
  ];
  ngOnInit(): void {
    this.bounceDivState = "active";
  }
}
