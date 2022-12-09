import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {userIdToken} from '../../app/header/header.component';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css'],
})
export class SidebarContentComponent implements OnInit {
  
  headers = new HttpHeaders({'Authorization':`Bearer ${userIdToken}`});
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

  skill = 0;
  complexity = 0;
  
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
  
  
  fetchData(skillId: number, compId: number) {
    debugger;
    return this.httpClient
      .post<any>('http://localhost:3000/qaManager/allQA',{
        compId,skillId
    },{headers:this.headers})
      .subscribe((response) => {
        this.arr = response.result; 
        console.log(this.arr);
      });
  }
  getSkills() {
     debugger;
    this.httpClient
      .get<any>('http://localhost:3000/skillsManager',{headers:this.headers})
      .subscribe((response) => {
        this.Skill = response.result;
      });
  }
  getComplexity() {
    debugger;
    this.httpClient
      .get<any>('http://localhost:3000/ComplexityManager',{headers:this.headers})
      .subscribe((response) => {
        this.Complexity = response.result;
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
  
  arrayLength = 0;
 
  

}