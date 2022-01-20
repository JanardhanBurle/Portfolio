import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
            style({ transform: "scale(1, 0.95) translateY(10px)" }),
            style({ transform: "scale(1,0.95) translateY(0px)" }),
            style({ transform: "scale(1,1) translateY(0)" }),
          ])
        ),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}
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

  gotToHome() {
    this.router.navigate(["home"]);
  }
}
