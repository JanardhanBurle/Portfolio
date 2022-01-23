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
  ngOnInit(): void {
    this.bounceDivState = "active";
  }
}
