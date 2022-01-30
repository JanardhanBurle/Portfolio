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
      label: "HTML",
      progress: "95%",
      aos: "fade-up",
    },
    {
      label: "CSS",
      progress: "90%",
      aos: "fade-up",
    },
    {
      label: "Javascript",
      progress: "93%",
      aos: "fade-up",
    },
    {
      label: "Angular",
      progress: "90%",
      aos: "fade-up",
    },
    {
      label: "Node Js",
      progress: "87%",
      aos: "fade-up",
    },
    {
      label: "Flutter",
      progress: "87%",
      aos: "fade-up",
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
