import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

skill:any;
SkillId:any;
// complexity:any;
ComplexityId:any;
Question:any;
answer:any;
Keyword:any;
Skills: any = [];
Complexity: any = [];
QAresponse:any;
Skillresponse:any;

  constructor(private formBuilder:FormBuilder,private http:HttpClient) {
   

  }
 
  ngOnInit(): void {
    debugger
    this.getSkills();
    this.getComplexity();
  }

  getComplexity() {
    this.http
      .get<any>('http://localhost:3000/ComplexityManager')
      .subscribe((response) => {
        this.Complexity = response.result;
        console.log(this.Complexity);
      });
  }

  getSkills() {
    this.http
      .get<any>('http://localhost:3000/skillsManager')
      .subscribe((response) => {
        this.Skills = response.result;
        // console.log(this.Skill);
      });
  }

  getSelectedSkill(value:any){
    debugger
    this.SkillId=value;
  }
  getSelectedComplexity(value:any){
    debugger
    this.ComplexityId=value;
  }


  addSkill(skillName:any){
    debugger
  try{
   
    this.http.post<any>('http://localhost:3000/skillsManager/addSkill',
    {skillName}).subscribe((response) => {
       this.Skillresponse = response.Message;    
    });
  }catch{
      this.Skillresponse="Error adding Skill"
  }
  }
  
  addComplexity(value:any){
    
  }

  addQuestion(skillId:any,cmpId:any,Question:any,Answer:any,Answerkeywords:any){
    debugger
    this.http.post<any>('http://localhost:3000/qaManager/insertQA',
    {skillId,cmpId,Question,Answer,Answerkeywords}).subscribe((response) => {
       this.QAresponse = response.Message;
    });
  }
}
