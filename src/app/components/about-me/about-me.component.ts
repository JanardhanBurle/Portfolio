import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
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
export class AboutMeComponent implements OnInit {
  years: any;
  months: any;
  constructor() {}

  bounceDivState = "initial";
  showContent = false;
  technology = [
    {
      label: "HTML",
      progress: "95%",
    },
    {
      label: "CSS",
      progress: "90%",
    },
    {
      label: "Javascript",
      progress: "93%",
    },
    {
      label: "Angular",
      progress: "90%",
    },
    {
      label: "Node Js",
      progress: "87%",
    },
    {
      label: "Flutter",
      progress: "87%",
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
    const duration = moment.duration(
      moment(new Date()).diff(moment("2016-11-10 9:00:00"))
    );
    this.years = Math.round(duration.asYears());
    this.months = Math.round((duration.asYears() - this.years) * 12);
  }
}
