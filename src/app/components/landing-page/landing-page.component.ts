import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { AfterViewInit, Component, OnInit } from "@angular/core";
declare var Typed: any;

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
  animations: [
    trigger("slideIn", [
      state("void", style({ transform: "translateX(100px)" })),
      transition(":enter", [animate(500)]),
    ]),
    trigger("hideShow", [
      state("true", style({ opacity: 0 })),
      transition("0 => 1", animate(300)),
    ]),
    trigger("fade", [
      state("void", style({ opacity: 0 })),
      transition(":enter", [animate(1000)]),
    ]),
  ],
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  constructor() {}

  bounceDivState = "initial";
  showContent = false;
  ngOnInit(): void {
    this.bounceDivState = "active";
  }

  ngAfterViewInit(): void {
    var typed = new Typed(".intro", {
      strings: [
        `
       <span style="color:#CCC;font-size:12px"> 
       &lt;!doctype html><br>
       &lt;html lang="en"><br>
       &nbsp; &nbsp; &lt;body> <br>
       &nbsp; &nbsp; &nbsp; &lt;div>  
        <p style="color: #000;
        font-size: 18px;
        line-height: 30px;">
        &nbsp; &nbsp; &nbsp; &nbsp;  Hello, <span style="color:#CCC;font-size:12px">  &lt;br> </span><br>
        &nbsp; &nbsp; &nbsp; &nbsp; My Name is <span style="color:#CCC;font-size:12px">  &lt;br> </span><br>
        &nbsp; &nbsp; &nbsp; &nbsp; <span style="color:#CCC;font-size:12px">  &lt;h2> </span>
        <span style="font-size: 30px;color:#0a65c2;font-weight:bold;margin-left:10px"> Janardhanarao Burle,
        </span> <span style="color:#CCC;font-size:12px">  &lt;/h2> </span> 
        <span style="color:#CCC;font-size:12px">  &lt;br> </span><br>
        <div style="display: flex;
        display: flex;
        align-items: center;
        color: #0a65c2;
        margin: 15px 0px 15px 35px;
        font-size: 20px;
        font-weight: 500;">
        <img style="margin-right: 10px;" src="assets/images/angular.svg" height="25" alt=""> <span style="margin-right:10px">Angular</span> | 
        <img style="margin-right: 10px;margin-left: 10px;" src="assets/images/flutter.svg" height="25" alt=""> Flutter Developer</div>
        
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="color:#CCC;font-size:12px">  &lt;p></span><span style="color: #000;
        font-size: 16px;
        line-height: 30px;">I'm a Frontend Developer working primarily in the web and mobile spaces</span>
        <br><span style="margin-left: 50px;
        color: #000;
        font-size: 16px;
        line-height: 30px;"> based in Doha, Qatar.</span>
        <span style="color:#CCC;font-size:12px">  &lt;/p> </span>
        </p>
        &nbsp; &nbsp; &nbsp; &lt;div><br>
        &nbsp; &nbsp;  &lt;/body><br>
        &nbsp; &lt;/html><br>
        </span>
        `,
      ],
      typeSpeed: 15,
      backSpeed: 5,
      showCursor: false,
      loop: false,
    });
  }
}
