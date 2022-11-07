// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgModel } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { QandAnsServiceService } from '../services/qand-ans-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-interviewer-screen',
  templateUrl: './interviewer-screen.component.html',
  styleUrls: ['./interviewer-screen.component.css'],
})
export class InterviewerScreenComponent implements OnInit {
 

  Skill: any = [];
  Complexity: any = [];
  arr: any = [];

  recruiterData = this.formBuilder.group({
    skillId: [''],
    level: [''],
  });

  showMe: boolean = true;
  hideMe: boolean = false;
  hideMeI: boolean = false;
  public categoryA: any = [];
  public levelA: any = [];
  nextI = 0;
  i = 0;
  Today: any = new Date();
  sliderOutput = 0;
  skill = 0;
  complexity = 0;
  public question: any = '';
  public answer: any = '';
  ques: boolean = false;
  public QunAns: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getSkills();
    this.getComplexity();
  }

  hideAnswer() {
    this.showMe = !this.showMe;
  }

  updateSetting(event: any) {
    this.sliderOutput = event.value;
  }
  //Note Editor
  editorConfig1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '170px',
    maxHeight: 'auto',
    width: '50%',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  //Additional QA Editor
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '100px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: false,
    showToolbar: false,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
  };

  fetchData(id: any, skillId: any, compId: any) {
    debugger;
    return this.httpClient
      .post<any>('http://localhost:3000/qaManager', {
        id,
        compId,
        skillId,
      })
      .subscribe((response) => {
        this.arr.push(response);
        this.question = 'Q: ' + response.Question;
        this.answer = 'A: ' + response.Answer;
        // console.log(this.arr);
      });
  }
  
  getSkills() {
    debugger;
    this.httpClient
      .get<any>('http://localhost:3000/skillsManager')
      .subscribe((response) => {
        this.Skill = response.data;
        // console.log(this.Skill);
      });
  }
  getComplexity() {
    this.httpClient
      .get<any>('http://localhost:3000/ComplexityManager')
      .subscribe((response) => {
        this.Complexity = response.data;
        // console.log(this.Complexity);
      });
  }

  onSelectSkill(data: any) {
    this.skill = data;
  }

  onSelectComple(data: any) {
    this.complexity = data;
    let id = this.i.toString();
    this.fetchData(id, this.skill, data);
    this.hideMeI = true;
  }

  // onDropdown1()
  // {
  //   this.nextI=0;
  //   this.arrayLength=this.arr.length;
  //   this.question="Q: "+this.arr[0].Question;
  //   this.answer="A: "+this.arr[0].Answer;
  //   this.nextI++;
  //   this.hideMe=true;
  // }

  arrayLength = 0;

  nextQA() {
    debugger;
    this.i++;
    let id = this.i.toString();

    this.fetchData(id, this.skill, this.complexity);
  }
  prevQA() {
    debugger;
    this.i--;
    console.log(this.arr);
    this.question = 'Q: ' + this.arr[this.i].Question;
    this.answer = 'A: ' + this.arr[this.i].Answer;
  }

  nextQuestion(data: any) {
    debugger;
    if (this.nextI < this.arrayLength) {
      if (data === 'next') {
        this.i++;
        this.question = 'Q: ' + this.arr[this.i].Question;
        this.answer = 'A: ' + this.arr[this.i].Answer;
        this.nextI++;
      }
    } else {
      alert('No More Questions');
    }
  }

  privQuestion(data: any) {
    debugger;
    if (data === 'prev') {
      this.ques = true;
      this.i--;

      this.question = 'Q: ' + this.arr[this.i].Question;
      this.answer = 'A: ' + this.arr[this.i].Answer;
      this.nextI--;
    }
    this.ques = false;
  }

  formatLabel(value: number) {
    if (value >= 5) {
      return 'L' + Math.round(value / 5);
      // console.log(Math.round(value/5))
    }
    // console.log(value/5);
    return value;
  }
}
