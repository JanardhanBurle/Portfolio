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
