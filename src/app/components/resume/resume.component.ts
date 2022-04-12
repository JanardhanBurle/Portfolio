import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) { }
  data = {
    description: `In my <strong>5.6 years</strong> as a <strong>System Engineer</strong>, I have acquired knowledge of Web and Mobile Application Development, Architecting front end frameworks such as Angular. To enhance my knowledge and further my career, I’d
  like to bring these skills to benefit the organization.`,
    experience: [
      {
        title: 'Application Developer - Flutter',
        clientInfo: `Qatar Islamic Bank
      <img width="25" src="https://media.licdn.com/dms/image/C4E0BAQHrj9pyX7PxmA/company-logo_200_200/0?e=2159024400&v=beta&t=QeSIQpt2PsX1rrxz8gEWtdeleVOb-MjkHCYN5uMrEA4" alt=""> | Tata Consultancy Services Pvt Ltd. <img width="40" src="https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png"
          alt="">`,
        start: 'Oct, 2019',
        end: 'Present',
        projects: ['QIB Mobile Banking Revamp', 'QIB Admin Panel Web Application'],
        skills: ['Flutter', 'Dart', 'Angular 10', 'Angular Material', 'HTML5', 'SCSS'],
        info: [
          `Developed <strong>Pixel Perfect, an Impressive, Customer pleasing </strong> UI based on XD/Wireframes provided by Marketing Team.`,
          `Worked on the <strong>BLOC pattern</strong> state management system, which helped to have separate Business Logic from UI and to have better codebase maintainability.`,
          `Experienced in implementing Flutter project structure in Dart programing for enterprise-level Flutter applications.`,
          `By gaining a solid understanding of Stateful, Stateless Widgets and Mobile Development development life cycle, created <strong>custom UI
            components</strong> as a library for reusability.`,
          `I have worked on <strong>Theming</strong> for Android and IOS in both light and dark modes.`,
          `Solid knowledge in Asynchronous programming in Dart / Flutter for working with backend REST-based APIs.`,
          `Experienced in integrating 3rd party flutter libraries like <strong>Firebase
            notifications</strong> , <strong>google, huawei maps location</strong>, and
        <strong>DIO</strong> (A powerful HTTP client for Dart), etc.`,
          `Experience in performance fine tuning of Flutter applications and in releasing apps to the <strong>Diawi store</strong> for User acceptance Testing.
        `,
          `Cached GET Request calls using <strong>Flutter Cache Manager</strong> to increase data retrieval performance and used Lottie and SVG packages to provide the best App user experience resulting lag free customer interaction
        and less Mobile App Size.`,
          `Used localization to enable apps with English and Arabic languages resulting in almost 15% new customers.`,
          `Developed a <strong>Maintainable</strong>, <strong>Multilingual</strong>,
<strong>Secure</strong>, and <strong>Extendable</strong> Angular Architecture with Angular Material, Husky, TSLint, prettier, stylelint, etc. Through which developers saved almost 20% time for their deliverables.`,
          `Designed the application in a <strong>modular architecture</strong> with role-based authorization/access control.`,
          `Pre & Post serve, build hooks are added to the application using Node Js for continuous development.`

        ]
      },
      {
        title: 'Application Developer - FullStack',
        clientInfo: `Commercial Bank of Dubai
        <img width="20" src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/f2/3b/04/f23b0436-dc3d-99b2-729a-1fb7c75f69a9/source/512x512bb.jpg" alt=""> | Tata Consultancy Services Pvt Ltd. <img width="40" src="https://www.carlogos.org/logo/Tata-Group-logo-3840x2160.png"
            alt="">`,
        start: 'Nov, 2016',
        end: 'Oct 2019',
        info: [
          `Experienced in developing front-end components using Object-Oriented JavaScript, HTML5, and CSS3.`,
          `Developed REST APIs using ASP .NET MVC architecture.`,
          `Has a solid understanding of Entity Framework, Routing, Dependency Injection concepts on .Net.`,
          `Basic understanding of Oracle and MySQL Database`,
          `Integration of user-facing elements developed by front-end developers with server-side logic.`,
          `Developed Web APIs in <strong>Node Js</strong> using <strong>Express Js,
          JSON Parser, Mongoose</strong> plugins to manage data in
      <strong>Mongo DB </strong>a NoSql Database.`,
          `Implemented the Field Rework highlighter for better user experience on the rework journey of the customer application.`,
          `Writing reusable, testable, and efficient code with proper documentation.`,
          ` Designed and implemented low-latency, high-availability, and performant applications Implementation of security and data protection Integration of data storage solutions.`,
          `Worked on UI Development, Service Integration, and automated testing.`
        ],
        projects: ['Raffle Draw',
          'Wholesale Credit Application System (CBD - WCAS',
          'Digital Credit Card Application (DIGITAL CC)'
        ],
        skills: ['ASP .Net, ADO .Net',
          'Angular 4',
          'Node Js',
          'Mongo DB',
          'Express Js',
          'Angular Material'
        ]
      }
    ]
  }




  ngOnInit(): void {
    this.form = this.fb.group({
      description: [this.data.description],
      experience: new FormArray([])
    });
    this.prepareExperience(this.data.experience);
  }

  prepareExperience(exp: any) {
    const experience = this.form.get('experience') as FormArray;
    exp.forEach((data: any) => {
      const exp = this.fb.group({
        title: [data.title],
        clientInfo: [data.clientInfo],
        start: [data.start],
        end: [data.end],
        info: new FormArray([]),
        projects: new FormArray([]),
        skills: new FormArray([]),
      });
      experience.push(exp);
      ['info', 'projects', 'skills'].forEach(control => {
        this.prepareArray(data, exp, control);
      });
    })
  }

  prepareArray(data: any, exp: FormGroup, arrayName: string) {
    const info = exp.get(arrayName) as FormArray;
    data[arrayName].forEach((value: any) => {
      info.push(new FormControl(value));
    });
  }


  submitChange() {
    console.log(this.data);
  }

}
