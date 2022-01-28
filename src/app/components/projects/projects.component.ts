import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  animations: [
    trigger("bounce", [
      transition("* => active", [
        animate(
          "3s",
          keyframes([
            style({ transform: "scale(0.9, 1.1) translateY(-100px)" }),
            style({ transform: "scale(1, 0.95) translateY(0)" }),
            style({ transform: "scale(1,1) translateY(-7px)" }),
            style({ transform: "scale(1,1) translateY(0)" }),
          ])
        ),
      ]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  bounceDivState = "initial";
  showContent = false;
  projects = [
    {
      imageUrl: "assets/images/portfolio.svg",
      name: "My Portfolio Website",
      description: "Angular / Firebase / AOS",
      gitUrl: "https://github.com/JanardhanBurle/Portfolio",
      webUrl: "https://janardhan-portfolio.web.app/",
    },
    {
      imageUrl: "assets/images/resume.svg",
      name: "My Resume Template",
      description: "HTML5 / CSS3",
      gitUrl: "https://github.com/JanardhanBurle/Resume",
      webUrl: "/assets/files/resume.html",
    },
  ];
  ngOnInit(): void {
    this.bounceDivState = "active";
  }
}
