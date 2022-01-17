import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from "@angular/animations";
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
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
export class AppComponent implements OnInit {
  bounceDivState = "initial";

  ngOnInit(): void {
    this.bounceDivState = "active";
  }
}
