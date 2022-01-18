import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";

const routes: Routes = [
  {
    path: "home",
    component: LandingPageComponent,
  },
  {
    path: "about-me",
    component: AboutMeComponent,
  },
  {
    path: "experience",
    component: ExperienceComponent,
  },
  {
    path: "projects",
    component: ProjectsComponent,
  },
  {
    path: "skills",
    component: SkillsComponent,
  },
  {
    path: "education",
    component: EducationComponent,
  },
  {
    path: "contact-me",
    component: ContactMeComponent,
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
