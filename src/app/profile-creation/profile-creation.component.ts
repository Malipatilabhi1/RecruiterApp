import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProfileServiceService } from '../services/profile-service.service';

@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.css'],
})
export class ProfileCreationComponent implements OnInit {
  // profileForm:FormGroup;
  pArray: any = [];
  data: any;
  public static sID1: any = '';
  public static sID2: any = '';
  public static sID3: any = '';
  public static cId1: any = '';
  public static cId2: any = '';
  public static cId3: any = '';
  Skill: any = [];
  Complexity: any = [];
  CandidateInfo: Object = '';
  Name: any = '';
  PhoneNo: any = '';
  Email: any = '';
  Experiance: any = '';
  i!: number;
  value: any = [];
  key: any = [];

  // Skill:any=[{skillId:'1',skillName:'C#'},{skillId:'2',skillName:'Angular'},{skillId:'3',skillName:'SQL'},{skillId:'4',skillName:'Azure'}];
  public formGroup: FormGroup | undefined;
  constructor(
    private _http: HttpClient,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private _Pservice: ProfileServiceService
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
        skillId: new FormControl(),
        cmpId: new FormControl(),
      }),
    ]),
  });
  isLinear = false;

  storeDatas() {
    // debugger;
    this.pArray = this.skillFormGroup.value.Skills;
    console.log(this.Skills);
    console.log(this.pArray);
    this.Email = this.firstFormGroup.controls['email'].value;
    this.Name = this.firstFormGroup.controls['name'].value;
    this.PhoneNo = this.firstFormGroup.controls['phone'].value;
    this.Experiance = this.firstFormGroup.controls['experience'].value;
    +' yrs';

    console.log(this.secondFormGroup.controls['message'].value);
    console.log(this.thirdFormGroup.controls['resume'].value);
    console.log(this.firstFormGroup.controls['email'].value);
    console.log(this.firstFormGroup.controls['name'].value);
    console.log(this.firstFormGroup.controls['phone'].value);

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

    console.log(
      '-----------------------------------------------------------------'
    );
    console.log(this.CandidateInfo);
    console.log(
      '-----------------------------------------------------------------'
    );

    for (this.i = 0; this.i < this.pArray.length; this.i++) {
      this.value = this.pArray[this.i].skillId;
      this.key = this.pArray[this.i].cmpId;
    }
    console.log(this.value, '', this.key);

    this.data = {
      emailId: this.Email,
      phone: this.PhoneNo,
      name: this.Name,
      experiance: this.Experiance,
      skills: this.pArray,
    };

    // console.log(this.data.skills);

    this._Pservice
      .sendingCandidateDataToServer(
        this.Email,
        this.PhoneNo,
        this.Name,
        this.Experiance,
        this.pArray
      )
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.warn(error);
        }
      );
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
      skillId: new FormControl(),
      cmpId: new FormControl(),
    });

    this.Skills.push(skill);

    console.log(skill);

    // const aa = this.formGroup?.get.skillId?.value;
    // const skilll = new FormGroup()
    //   const sid = skilll.skillId;
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

  onSelectSkill(data: any) {}
  pitch(data: any) {
    // debugger;
  }
}
