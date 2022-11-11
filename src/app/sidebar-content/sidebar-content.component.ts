import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css'],
})
export class SidebarContentComponent implements OnInit {
  
  Skill: any = [];
  Complexity: any = [];
  arr: any = [];
  p: any = 0;
  recruiterData = this.formBuilder.group({
    skillId: [''],
    level: [''],
  });
  showMe: boolean = true;
  hideMe: boolean = false;
  hideMeI: boolean = false;
  // public categoryA: any = [];
  // public levelA: any = [];
  // nextI = 0;
  // i = 0;
  // Today: any = new Date();
  // sliderOutput = 0;
  skill = 0;
  complexity = 0;
  // public question: any = '';
  // public answer: any = '';
  // ques: boolean = false;
  // public QunAns: any = [];
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
  // updateSetting(event: any) {
  //   this.sliderOutput = event.value;
  // }
  
  fetchData(skillId: number, compId: number) {
    debugger;
    return this.httpClient
      .post<any>('http://localhost:3000/qaManager/allQA',{
        compId,skillId
    })
      .subscribe((response) => {
        this.arr = response.data; 
        console.log(this.arr);
      });
  }
  getSkills() {
     debugger;
    this.httpClient
      .get<any>('http://localhost:3000/skillsManager')
      .subscribe((response) => {
        this.Skill = response.data;
      });
  }
  getComplexity() {
    debugger;
    this.httpClient
      .get<any>('http://localhost:3000/ComplexityManager')
      .subscribe((response) => {
        this.Complexity = response.data;
        // console.log(this.Complexity);
      });
  }
  onSelectSkill(data: any) {
    debugger
    this.skill = data;
  }
  onSelectComple(data: any) {
    this.complexity = data;
    // let id=this.i.toString();
    this.fetchData(this.skill, this.complexity);
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
  // nextQA() {
  //   debugger;
  //   this.i++;
  //   let id = this.i.toString();
  //   this.fetchData(this.skill, this.complexity);
  // }
  // prevQA() {
  //   debugger;
  //   this.i--;
  //   console.log(this.arr);
  //   this.question = 'Q: ' + this.arr[this.i].Question;
  //   this.answer = 'A: ' + this.arr[this.i].Answer;
  // }
  // nextQuestion(data: any) {
  //   debugger;
  //   if (this.nextI < this.arrayLength) {
  //     if (data === 'next') {
  //       this.i++;
  //       this.question = 'Q: ' + this.arr[this.i].Question;
  //       this.answer = 'A: ' + this.arr[this.i].Answer;
  //       this.nextI++;
  //     }
  //   } else {
  //     alert('No More Questions');
  //   }
  // }
  // privQuestion(data: any) {
  //   debugger;
  //   if (data === 'prev') {
  //     this.ques = true;
  //     this.i--;
  //     this.question = 'Q: ' + this.arr[this.i].Question;
  //     this.answer = 'A: ' + this.arr[this.i].Answer;
  //     this.nextI--;
  //   }
  //   this.ques = false;
  // }
//   formatLabel(value: number) {
//     if (value >= 5) {
//       return 'L' + Math.round(value / 5);
//       // console.log(Math.round(value/5))
//     }
//     // console.log(value/5);
//     return value;
//   }
// }
// if (req.session.isAuthenticated == true) {
//   res.redirect("http://localhost:4200/inter" );
//   res.status(200).json({
//     isAuthenticated: req.session.isAuthenticated,
//     username: req.session.account?.username,
//     name: req.session.account?.name,
//   });
// } else {
//   res.redirect("http://localhost:4200/dashboard");
// }
// //   console.log(req.session)
// //   res.status(200).json({
// //         title: 'Recruitment App',
// //          isAuthenticated: req.session.isAuthenticated,
// //          username: req.session.account?.username});
// // ( {
// //       title: 'Recruitment App',
// //       isAuthenticated: req.session.isAuthenticated,
// //       username: req.session.account?.username,
// //   });
// });
}