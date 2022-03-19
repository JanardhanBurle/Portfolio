import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { HeaderComponent } from "./components/header/header.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { EducationComponent } from "./components/education/education.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";
import { NgxTypedJsModule } from "ngx-typed-js";
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { BlurOnHoverDirective } from "./directives/blur-on-hover.directive";
import { LottieModule } from "ngx-lottie";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ "lottie-web");
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    LayoutComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactMeComponent,
    ProgressBarComponent,
    BlurOnHoverDirective,
    ResumeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxTypedJsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
