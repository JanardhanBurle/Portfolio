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
      label: "Flutter",
      progress: 7,
      aos: "fade-up",
      icon: "assets/images/flutter.svg",
      exp: 1.5,
    },
    {
      label: "Angular",
      progress: 9,
      aos: "fade-up",
      icon: "assets/images/angular.svg",
      exp: 5.3,
    },
    {
      label: "Javascript",
      progress: 9,
      aos: "fade-up",
      icon: "assets/images/js.png",
      exp: 5.3,
    },
    {
      label: "Node Js",
      progress: 8,
      aos: "fade-up",
      icon: "assets/images/node.png",
      exp: 2.5,
    },
    {
      label: "HTML",
      progress: 9,
      aos: "fade-up",
      icon: "assets/images/html.png",
      exp: 5.3,
    },
    {
      label: "CSS",
      progress: 9,
      aos: "fade-up",
      icon: "assets/images/css.svg",
      exp: 5.3,
    },
  ];

  techStackCards = [
    {
      imgUrl: "assets/images/angular-material.svg",
      shortDescription:
        "Familiar with UI Component libraries like Angular Material, Prime NG, Bootstrap5 and Flexbox CSS.",
      longDescription: "UI Component libraries",
      aos: "fade-right",
    },
    {
      imgUrl: "assets/images/angular-material.svg",
      shortDescription:
        "Familiar with UI Component libraries like Angular Material, Prime NG, Bootstrap5 and Flexbox CSS.",
      longDescription: "UI Component libraries",
      aos: "fade-right",
    },
    {
      imgUrl: "assets/images/angular-material.svg",
      shortDescription:
        "Familiar with UI Component libraries like Angular Material, Prime NG, Bootstrap5 and Flexbox CSS.",
      longDescription: "UI Component libraries",
      aos: "fade-up",
    },
    {
      imgUrl: "assets/images/angular-material.svg",
      shortDescription:
        "Familiar with UI Component libraries like Angular Material, Prime NG, Bootstrap5 and Flexbox CSS.",
      longDescription: "UI Component libraries",
      aos: "fade-left",
    },
    {
      imgUrl: "assets/images/angular-material.svg",
      shortDescription:
        "Familiar with UI Component libraries like Angular Material, Prime NG, Bootstrap5 and Flexbox CSS.",
      longDescription: "UI Component libraries",
      aos: "fade-left",
    },
  ];
  ngOnInit(): void {
    this.bounceDivState = "active";
  }
}
