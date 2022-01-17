import { Component, OnInit } from "@angular/core";
declare var Typed: any;

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: [
        "Flutter Developer",
        "Angular Developer",
        "Freelancer",
        "Badminton Player",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }
}
