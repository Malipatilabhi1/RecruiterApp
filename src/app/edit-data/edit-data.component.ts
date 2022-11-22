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
array:any=[];
name:any;
email:any;
phone:any;
experience:any;
date:any;
skillId:any=[];
cmpId:any=[];
Skill: any = [];
Complexity: any = [];
modeselect:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private formBuilder:FormBuilder,private http:HttpClient) {
    
    console.log(data) 
    this.name=data.value.canName;
    this.email=data.value.EmailId;
    this.phone=data.value.canPhone;
    this.experience=data.value.canExperience;
    this.date=this.data.value.Date;
    this.array=data.value.skills;
    this.skillId=this.array.skillId;
    this.cmpId=this.array.cmpId;
   

   debugger
    this.recruiterData=this.formBuilder.group({
      email:new FormControl(this.email),
      name:new FormControl(this.name),
      phone:new FormControl(this.phone),
      experience:new FormControl(this.experience),
      // date:new FormControl(this.date),
     });
     for(let i=1;i<=this.array.length;i++)
    {
    let j=0;
    this.lengthA.push(i);
    // this.modeselect=this.array[j].skillId;  
    j++;
  }
  
  
    this.skillFormGroup = this.formBuilder.group({
      skillId:new FormControl(this.array.skillId),
      cmpId:new FormControl(this.array.cmpId)
      
    });

     

  }
  length:any;
  lengthA:any=[];
  ngOnInit(): void {
    this.getSkills();
    this.getComplexity();
   debugger
    console.log(this.array.length)
  // this.array=this.data;
  
  
  // console.log()

  }
  recruiterData=this.formBuilder.group({
    email:(''),
    name:(''),
    phone:(''),
    experience:(''),
   });
   skillFormGroup = this.formBuilder.group({
    skillId:(''),
    cmpId:('')
  });


  getComplexity() {
    this.http
      .get<any>('http://localhost:3000/ComplexityManager')
      .subscribe((response) => {
        this.Complexity = response.data;
        // console.log(this.Complexity);
      });
  }

  getSkills() {
    this.http
      .get<any>('http://localhost:3000/skillsManager')
      .subscribe((response) => {
        this.Skill = response.data;
        // console.log(this.Skill);
      });
  }
}
