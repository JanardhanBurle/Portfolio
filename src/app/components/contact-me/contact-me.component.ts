import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AnimationOptions } from "ngx-lottie";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.scss"],
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
export class ContactMeComponent implements OnInit {
  bounceDivState = "initial";
  form: FormGroup;
  status: string = "";
  constructor(private fb: FormBuilder, private http: HttpService) {
    this.form = this.fb.group({
      fullName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);
  options: AnimationOptions = {
    path: "/assets/lottie/contact-success.json",
    loop: false,
  };
  optionsLoading: AnimationOptions = {
    path: "/assets/lottie/loading.json",
  };
  ngOnInit(): void {
    this.bounceDivState = "active";
    this.status = "INIT";
  }

  submitForm() {
    this.status = "PENDING";
    this.http.post(this.form.value).subscribe((res: any) => {
      console.log(res.toString());
      if ((res.status = 200)) {
        this.status = "SUCCESS";
      }
    });
  }
}
