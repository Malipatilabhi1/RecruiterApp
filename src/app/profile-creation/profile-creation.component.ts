import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormatWidth } from '@angular/common';

@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.css']
})
export class ProfileCreationComponent implements OnInit {


  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient) { 
    
  }

  ngOnInit(): void {
    this.getSkills();
  }

  Skill:any=[];
  skillid:any='';
  level:any='';
  
  // storeData(){
  //   this.profileForm=new FormGroup({
  //     name:new FormControl(""),
  //     message:new FormControl(""),
  //     Skills: new FormArray([
  //       new FormGroup({
  //         skill:new FormControl(''),
  //         level:new FormControl('')
  //       })
  //     ])
  //   });
  // }

  // addSkills(){
  //   const control=<FormArray>this.profileForm.controls['Skills'];
  //   control.push(
  //     new FormGroup({
  //       skill:new FormControl(''),
  //         level:new FormControl('')
  //     })
  //   )
  // }

  profileForm=this.formBuilder.group({
    name:new FormControl(''),
    Phone:new FormControl(''),
    Experience:new FormControl(''),
    message:new FormControl(''),

    weightage:this.formBuilder.array([
      this.formBuilder.control('')
    ])

  });
 

  getSkills(){
    this.httpClient.get<any>('http://localhost:3000/skillsManager').subscribe(
      response=>{
        this.Skill=response.data;
      }
    );
  }

  
  get weightage():FormArray{
    return this.profileForm.get('weightage') as FormArray;
  }
  
  addNew(){
    debugger;
    const Skillset=this.formBuilder.group({
        skillId:new FormControl(''),
        level:new FormControl('')
    })
    this.weightage.push(Skillset);
   
  }
  storeData(){
    debugger;
    var Name=this.profileForm.controls['name'].value;
    var Phone=this.profileForm.controls['Phone'].value;
    var Experience=this.profileForm.controls['Experience'].value;+" yrs"
    var message=this.profileForm.controls['message'].value;

    console.log(Name);
    console.log(Phone);
    console.log(Experience);
    console.log(message);

    console.log(this.profileForm.controls['weightage'].value);
    console.log(this.profileForm.get(['weightage','skillid']))
    console.log("skill is: "+this.profileForm.get(['weightage','skillid'])?.value)
    console.log("skill is: "+this.profileForm.get(['weightage','level'])?.value)
  }

  onSelectSkill(data:any){
    debugger;
    this.skillid=data;
  }

  formatLabel(value:number){
    if(value>=5){
      return "L"+Math.round(value/5);
    }
    return value;
  }
}
