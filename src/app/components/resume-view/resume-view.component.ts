import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {
  form!: FormGroup;
  data: any;
  constructor(private fb: FormBuilder, private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get('https://us-central1-janardhan-portfolio.cloudfunctions.net/app/resume?resumeId=JANARDHAN_RESUME').subscribe((res: any) => {
      this.data = res;
      console.log(res);
      this.form = this.fb.group({
        description: [res.description],
        experience: new FormArray([])
      });
      this.prepareExperience(res.experience);
    });
  }

  getFormArray(form: any, arrayName: any) {
    return form.controls[arrayName] as FormArray;
  }

  addNewExp() {
    const data = {
      info: [''],
      projects: [''],
      skills: [''],
    }
    this.addExp(data);
  }

  removeExp(index: number) {
    const experience = this.form.get('experience') as FormArray;
    experience.removeAt(index);
  }

  addExp(data: any) {
    const experience = this.form.get('experience') as FormArray;
    const exp = this.fb.group({
      title: [data.title],
      clientInfo: [data.clientInfo],
      start: [data.start],
      end: [data.end],
      info: new FormArray([]),
      projects: new FormArray([]),
      skills: new FormArray([]),
    });
    experience.insert(0, exp);
    ['info', 'projects', 'skills'].forEach(control => {
      this.prepareArray(data, exp, control);
    });
  }


  addPoint(array: any) {
    array.insert(0, new FormControl());
  }

  removePoint(index: any, array: any) {
    array.removeAt(index);
  }


  prepareExperience(exp: any) {
    const experience = this.form.get('experience') as FormArray;
    exp.forEach((data: any) => {
      this.addExp(data);
    })
  }

  prepareArray(data: any, exp: FormGroup, arrayName: string) {
    const info = exp.get(arrayName) as FormArray;
    data[arrayName].forEach((value: any) => {
      info.push(new FormControl(value));
    });
  }


  submitChange() {
    console.log(this.form.value);
    const req = {
      resumeId: 'JANARDHAN_RESUME',
      data: this.form.value
    };
    this.http.post('https://us-central1-janardhan-portfolio.cloudfunctions.net/app/resume', req).subscribe(res => console.log(res));
  }


}
