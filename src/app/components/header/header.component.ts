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
import { ThemeService } from "src/app/Theme/theme.service";

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
  constructor(private router: Router, private themeService: ThemeService) {}
  bounceDivState = "initial";
  hideMenu = true;
  routerLinks = [
    {
      path: "about-me",
      label: "About Me",
      icon: "la-user-graduate",
    },
    {
      path: "skills",
      label: "Skills",
      icon: "la-list-alt",
    },
    {
      path: "projects",
      label: "Projects",
      icon: "la-project-diagram",
    },
    {
      path: "experience",
      label: "Experience",
      icon: "la-business-time",
    },
    {
      path: "education",
      label: "Education",
      icon: "la-school",
    },
    {
      path: "contact-me",
      label: "Contact Me",
      icon: "la-id-card-alt",
    },
  ];
  ngOnInit(): void {
    this.bounceDivState = "active";
  }

  gotToHome() {
    this.router.navigate(["home"]);
  }

  changeTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }
}
