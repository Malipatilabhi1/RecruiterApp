import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataFileService } from '../data-file.service'; 

@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.css'],
})
export class ProfileCreationComponent implements OnInit {
  // profileForm:FormGroup;
 pArray:any=[];
 public static sID1:any;
 public static sID2:any;
 public static sID3:any;
 public static cId1:any;
 public static cId2:any;
 public static cId3:any;
  Skill: any = [];
  Complexity: any = [];
  CandidateInfo: Object = '';
  public static Name: any='';
  public static PhoneNo:any ='';
  public static Email:any='';
  public static Experiance:any=''; 
  
  // Skill:any=[{skillId:'1',skillName:'C#'},{skillId:'2',skillName:'Angular'},{skillId:'3',skillName:'SQL'},{skillId:'4',skillName:'Azure'}];

  constructor(
    private _http: HttpClient,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private _Pservice: DataFileService
  ) {}

  ngOnInit(): void {
    this.getSkills();
    this.getComplexity();
  }

  ngAfterViewInit() {
    //background color
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      'rgba(255, 228, 196, 0.32)';
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
    phone: ['', Validators.required],
    experience: [''],
  });
  secondFormGroup = this.formBuilder.group({
    message: [''],
  });
  thirdFormGroup = this.formBuilder.group({
    resume: [''],
  });
  skillFormGroup = new FormGroup({
    Skills: new FormArray([
      new FormGroup({
        skillId: new FormControl<number[]>([0]),
        cmpId: new FormControl<number[]>([0]),
      }),
    ]),
  });
  isLinear = false;

  email:any;
  name:any;
  phone:any;
  experience:any;
  SkillA:any=[];
  
  storeDatas() {
    debugger;
    // this.pArray=this.skillFormGroup.value.Skills;
    this.SkillA =this.skillFormGroup.value.Skills;
    // console.log(this.Skills.value)
    console.log();
    // debugger;

    this.email= this.firstFormGroup.controls['email'].value;
    this.name = this.firstFormGroup.controls['name'].value;
    this.phone = this.firstFormGroup.controls['phone'].value;
    this.experience= this.firstFormGroup.controls['experience'].value;

    // ProfileCreationComponent.Email= this.firstFormGroup.controls['email'].value;
    // ProfileCreationComponent.Name = this.firstFormGroup.controls['name'].value;
    // ProfileCreationComponent.PhoneNo = this.firstFormGroup.controls['phone'].value;
    // ProfileCreationComponent.Experiance= this.firstFormGroup.controls['experience'].value;


    // console.log(this.secondFormGroup.controls['message'].value);
    // console.log(this.thirdFormGroup.controls['resume'].value);
    // console.log(this.firstFormGroup.controls['email'].value);
    // console.log(this.firstFormGroup.controls['name'].value);
    // console.log(this.firstFormGroup.controls['phone'].value);


    
    // ProfileCreationComponent.sID1 = this.pArray[0].skillId;
    // ProfileCreationComponent.sID2 = this.pArray[1].skillId;
    // ProfileCreationComponent.sID3 = this.pArray[2].skillId;
    // ProfileCreationComponent.cId1 = this.pArray[0].cmpId;
    // ProfileCreationComponent.cId2 = this.pArray[1].cmpId;
    // ProfileCreationComponent.cId3 = this.pArray[2].cmpId;
    
    // console.log(this.sID1);
    // console.log(this.cId1);
    // console.log(this.sID3);
    // console.log(this.cId3);
    
    
    
    // console.log(this.pArray[0].skillId);
    // console.log(this.pArray[0].cmpId);
    // console.log(this.pArray[1].skillId);
    // console.log(this.pArray[1].cmpId);
    // console.log(this.pArray[2].skillId);
    // console.log(this.pArray[2].cmpId);
    
    // this._Pservice.sendingCandidateDataToServer(ProfileCreationComponent.Email,ProfileCreationComponent.PhoneNo,ProfileCreationComponent.PhoneNo,ProfileCreationComponent.Experiance,this.pArray)
    
    this._Pservice.sendData(this.email,this.phone,this.name,this.experience,this.SkillA).subscribe(response=>
      {
        console.log(response);
      }
      )
       
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
  sendData(data: any) {
    debugger;
    return this._http
      .post<any>(
        'url',
        data
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
      )
      .subscribe((response) => {});
  }
  getComplexity() {
    this._http
      .get<any>('http://localhost:3000/ComplexityManager')
      .subscribe((response) => {
        this.Complexity = response.data;
        console.log(this.Complexity);
      });
  }

  getSkills() {
    this._http
      .get<any>('http://localhost:3000/skillsManager')
      .subscribe((response) => {
        this.Skill = response.data;
        console.log(this.Skill);
      });
  }
  get Skills(): FormArray {
    return this.skillFormGroup.get('Skills') as FormArray;
  }

  addNew() {
    // debugger;
    const skill = new FormGroup({
      skillId: new FormControl<number>(0),
      cmpId: new FormControl<number>(0),
    });

    this.Skills.push(skill);
    console.log(skill);
    
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

  onSelectSkill(data: any) {
    // debugger;
  }
  pitch(data: any) {
    // debugger;
  }
}