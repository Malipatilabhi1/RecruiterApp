import { Component, OnInit } from '@angular/core';
import {   FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.css']
})
export class ProfileCreationComponent implements OnInit {

  // profileForm:FormGroup;
  Skill:any=[];
  CandidateInfo:Object='';
  // Skill:any=[{skillId:'1',skillName:'C#'},{skillId:'2',skillName:'Angular'},{skillId:'3',skillName:'SQL'},{skillId:'4',skillName:'Azure'}];

  constructor(private httpClient:HttpClient,private formBuilder:FormBuilder,private elementRef: ElementRef) {   
  }

  ngOnInit(): void {
    this.getSkills();
  }
  
  ngAfterViewInit() {   //background color
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'rgba(255, 228, 196, 0.32)';
}
  // profileForm=new FormGroup({
  //   Email:new FormControl('',[Validators.required,Validators.email]),
  //   name:new FormControl('',Validators.required),
  //   Phone:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  //   Experience:new FormControl(''),
  //   message:new FormControl(''),

  //   Skills:new FormArray([ 
  //     new FormGroup({
  //       skillId:new FormControl('',Validators.required),
  //       level:new FormControl('',Validators.required)
  //     })       
  //   ])
  // });

//-------------------------------------------------------

firstFormGroup = this.formBuilder.group({
  email: ['', Validators.required],
  name: ['', Validators.required],
  phone:['', Validators.required],
  experience:['']
});
secondFormGroup = this.formBuilder.group({
  message: [''],
});
thirdFormGroup = this.formBuilder.group({
  resume: [''],
});
skillFormGroup = new FormGroup({
  Skills:new FormArray([ 
    new FormGroup({
      skillId:new FormControl(['',Validators.required]),
      complexity:new FormControl(['',Validators.required])
    })
  ])     
});
isLinear = false;

storeDatas(){
  // console.log(this.Skills.value)
  console.log();
  debugger;
  var message=this.firstFormGroup.controls['email'].value;
  var Name=this.firstFormGroup.controls['name'].value;
  var Phone=this.firstFormGroup.controls['phone'].value;
  var Experience=this.firstFormGroup.controls['experience'].value;+" yrs"
  
  console.log(this.secondFormGroup.controls['message'].value);
  console.log(this.thirdFormGroup.controls['resume'].value);
  console.log(this.skillFormGroup.value)
  
  console.log("-----------------------------------------------------------------")
  console.log(this.CandidateInfo);
  console.log("-----------------------------------------------------------------")

}
//--------------------------------------------------



  // get Email(){
  //   return this.profileForm.get('Email');
  // }
  // get name(){
  //   return this.profileForm.get('name');
  // }
  // get Phone(){
  //   return this.profileForm.get('Phone');
  // }
  // get SkillId(){
  //   return this.profileForm.get('skillId');
  // }


  // Pass profile data to backend
  sendData(data:any){
    debugger;
    return this.httpClient.post<any>('url',data
      // {
      // name,
      // Phone,
      // Emailid,
      // Experience,
      // resume,
      // Skills:{
      //   skillid,
      //   complexity
      // }
      // }
     ).subscribe(
      response=>{
          
      }
    );   
  }

  
  getSkills(){
    this.httpClient.get<any>('http://localhost:3000/skillsManager').subscribe(
      response=>{
        this.Skill=response.data;
      }
    );
  }

  get Skills():FormArray{
    return this.skillFormGroup.get('Skills') as FormArray;
  }
  
  addNew(){
    debugger;
    const skill=new FormGroup({
      skillId:new FormControl(''),
      level:new FormControl('')
    })       

    this.Skills.push(skill);
  }

  // storeData(data:any){

  //   // console.log(this.Skills.value)
  //   console.log(data);
  //   // debugger;
  //   var Name=this.profileForm.controls['name'].value;
  //   var Phone=this.profileForm.controls['Phone'].value;
  //   var Experience=this.profileForm.controls['Experience'].value;+" yrs"
  //   var message=this.profileForm.controls['message'].value;
  
  //   this.CandidateInfo=this.profileForm.value;
  //   console.log("-----------------------------------------------------------------")
  //   console.log(this.CandidateInfo);
  //   console.log("-----------------------------------------------------------------")
  
  // }

  onSelectSkill(data:any){

    debugger;  
  }
  pitch(data:any)
  {
    debugger;
    
  }

}


