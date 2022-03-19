import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ResumeComponent } from "./components/resume/resume.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "resume",
    component: ResumeComponent,
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
