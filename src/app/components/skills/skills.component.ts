import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
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
export class SkillsComponent implements OnInit {
  constructor() {}

  bounceDivState = "initial";
  showContent = false;
  technology = [
    {
      label: "Angular",
      progress: 9,
      aos: "fade-up",
      icon: "assets/images/angular.svg",
      exp: 6,
    },
    {
      label: "Flutter",
      progress: 7,
      aos: "fade-up",
      icon: "assets/images/flutter.svg",
      exp: 2,
    },

    {
      label: "Javascript",
      progress: 9,
      aos: "fade-up",
      icon: "assets/images/js.png",
      exp: 6,
    },
    {
      label: "Node Js",
      progress: 8,
      aos: "fade-up",
      icon: "assets/images/node.png",
      exp: 2.5,
    },
    {
      label: "HTML5",
      progress: 9,
      aos: "fade-up",
      icon: "assets/images/html.png",
      exp: 6,
    },
    {
      label: "CSS3",
      progress: 9,
      aos: "fade-up",
      icon: "assets/images/css.svg",
      exp: 6,
    },
    {
      label: "Backbase",
      progress: 6,
      aos: "fade-up",
      icon: "assets/images/backbase.png",
      exp: 6,
    },
    {
      label: "Sitefinity",
      progress: 6,
      aos: "fade-up",
      icon: "assets/images/sitefinity.png",
      exp: 6,
    },
    {
      label: "lit.dev",
      progress: 5,
      aos: "fade-up",
      icon: "assets/images/lit.svg",
      exp: 1,
    },
    {
      label: "Shoelace",
      progress: 5,
      aos: "fade-up",
      icon: "assets/images/shoelace.svg",
      exp: 1,
    },
  ];

  techStackCards = [
    {
      imgUrl: "assets/images/angular-material.svg",
      desc: "Familiar with UI Component libraries like Angular Material, Prime NG, Bootstrap5, Data Driven Documents(D3.js) and Flexbox CSS.",
      aos: "fade-right",
    },
    {
      imgUrl: "assets/images/git.svg",
      desc: "Excellent knowledge of Git Version Control including Branching, Merging and CI/CD pipeline configuration in web-based hosting services like GitHub, Bitbucket and GitLab etc.",
      aos: "fade-right",
    },
    {
      imgUrl: "assets/images/jira.svg",
      desc: "Has Good working experience on AGILE project management and software development that helps teams deliver value to customers faster and with fewer headaches. Good Hands on in JIRA, Microsoft Teams.",
      aos: "fade-up",
    },
    {
      imgUrl: "assets/images/softwares.svg",
      desc: "Hands on experience on IDEs like Android Studio, Visual Studio and VS code text editors.",
      aos: "fade-left",
    },
  ];
  ngOnInit(): void {
    this.bounceDivState = "active";
  }
}
