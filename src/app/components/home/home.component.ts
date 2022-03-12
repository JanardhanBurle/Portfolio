import { Component, OnInit } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";
declare var AOS: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  loading = true;
  bounceDivState = "initial";
  showContent = false;
  options: AnimationOptions = {
    path: "/assets/lottie/down_arrow.json",
  };
  styles: Partial<CSSStyleDeclaration> = {
    color: "grey",
  };
  ngOnInit(): void {
    AOS.init({ duration: 1200 });
    this.bounceDivState = "active";
    setTimeout(() => {
      this.loading = false;
    }, 0);
  }
}
