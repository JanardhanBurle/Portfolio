import { Component, HostListener, OnInit } from "@angular/core";
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
  end = false;
  ngOnInit(): void {
    AOS.init({ duration: 1200 });
    this.bounceDivState = "active";
    setTimeout(() => {
      this.loading = false;
    }, 200);
  }

  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event: any) {
    console.log(event);

    if (
      window.pageYOffset + window.innerHeight >=
      document.documentElement.scrollHeight - 50
    ) {
      this.end = true;
    } else {
      this.end = false;
    }
  }
}
