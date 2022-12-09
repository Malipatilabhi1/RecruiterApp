import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {userIdToken} from '../../app/header/header.component';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  headers = new HttpHeaders({'Authorization':`Bearer ${userIdToken}`});
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
Skillresponse1:any;

  constructor(private formBuilder:FormBuilder,private http:HttpClient) {
   

  }
 
  ngOnInit(): void {
    debugger
    this.getSkills();
    this.getComplexity();
  }

  getComplexity() {
    this.http
      .get<any>('http://localhost:3000/ComplexityManager',{headers:this.headers})
      .subscribe((response) => {
        this.Complexity = response.result;
        console.log(this.Complexity);
      });
  }

  getSkills() {
    this.http
      .get<any>('http://localhost:3000/skillsManager',{headers:this.headers})
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
      this.Skillresponse='';
      this.Skillresponse1='';
    debugger
  try{
   
    this.http.post<any>('http://localhost:3000/skillsManager/addSkill',
    {skillName},{headers:this.headers}).subscribe((response) => {
      //  this.Skillresponse = response.Message;
      
       if(response.Message=='The skill is already present!!')
       {
        this.Skillresponse1 = response.Message;
       }else{
        this.Skillresponse=response.Message;
       }
       console.log(response)   
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
    {skillId,cmpId,Question,Answer,Answerkeywords},{headers:this.headers}).subscribe((response) => {
       this.QAresponse = response.Message;
    });
  }
}
