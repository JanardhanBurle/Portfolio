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
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
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
export class ExperienceComponent implements OnInit {
  constructor() {}

  bounceDivState = "initial";
  showContent = false;
  years: any;
  months: any;
  days: any;
  experience = [
    {
      role: "Mobile App Developer",
      client: "Qatar Islamic Bank",
      logo: "assets/images/qib.png",
      date: "Present",
      location: "Doha, State of Qatar",
      points: [
        " Working as a part of the Flutter Development Team, designed and built reusable Widgets that let the team use in their respective User Story development, which is a key factor in delivering QIB Mobile Application on time.",
        "Worked on the BLOC pattern state management system, which helped to separate Business Logic from UI and to have better codebase maintainability.",
        "Cached GET Request calls using Flutter Cache Manager to increase data retrieval performance and used Lottie and SVG packages for best App user experience.",
        "Used localization to enable apps with English and Arabic languages resulting in almost 15% new customers.",
      ],
    },
    {
      role: "Frontend Developer",
      client: "Qatar Islamic Bank",
      logo: "assets/images/qib.png",
      date: "Jan, 2021",
      location: "Doha, State of Qatar",
      points: [
        "Developed a Maintainable, Multilingual, Secure, and Extendable Angular Architecture with Angular Material, Husky, TSLint, prettier, stylelint, etc.",
        "Designed the application in a modular architecture with role-based authorization/access control.",
        "Pre & Post serve, build hooks are added to the application using Node Js for continuous development.",
        "SCSS styling was added to write modular, maintainable, less code.",
        "UI Development, Service Integration, and Unit testing using spectator.",
      ],
    },
    {
      role: "Mobile App Developer",
      client: "Qatar Islamic Bank",
      logo: "assets/images/qib.png",
      date: "Feb, 2020",
      startDate: "Nov, 2019",
      location: "Doha, State of Qatar",
      points: [
        "Worked on enhancing the Existing customer onboarding application inline to complete the CRP journey.",
        "Implemented the Field Rework highlighter for better user experience on the rework journey of the customer application.",
        "Created reusable components which can be accessed in different roles of the application.",
      ],
    },
  ];
  ngOnInit(): void {
    this.bounceDivState = "active";
    const duration = moment.duration(
      moment(new Date()).diff(moment("2016-11-10 9:00:00"))
    );
    this.years = Math.round(duration.asYears());
    this.months = Math.round((duration.asYears() - this.years) * 12);
    this.days = ((duration.asYears() - this.years) * 12 - this.months) * 30;
  }
}
