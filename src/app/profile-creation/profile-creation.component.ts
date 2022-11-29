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
  updateData: any;
  Candidatestatus: any;
  count: number = 0;
  canId: any;
  status: boolean = false;
  skillData: any;
  skillArray: any;
  edata: any;
  eRes: any;
  arr: any = [];
  sEmail: any;
  Skill: any = [];
  Complexity: any = [];
  CandidateInfo: Object = '';
  public static Name: any = '';
  public static PhoneNo: any = '';
  public static Email: any = '';
  public static Experiance: any = '';

  // Skill:any=[{skillId:'1',skillName:'C#'},{skillId:'2',skillName:'Angular'},{skillId:'3',skillName:'SQL'},{skillId:'4',skillName:'Azure'}];

  constructor(
    private _http: HttpClient,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private _service: ProfileServiceService
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
  fifthFormGroup = this.formBuilder.group({
    searchEmail: [''],
  });
  secondFormGroup = this.formBuilder.group({
    message: [''],
  });
  thirdFormGroup = this.formBuilder.group({
    resume: [''],
  });
  skillFormGroup = new FormGroup({
    Skills: new FormArray(
      [
        new FormGroup({
          skillId: new FormControl<number[]>([0]),
          cmpId: new FormControl<number[]>([0]),
        }),
      ],
      [Validators.maxLength(5)]
    ),
  });
  isLinear = false;

  email: any;
  name: any;
  phone: any;
  experience: any;
  SkillA: any = [];

  storeDatas() {
    // debugger;
    // this.pArray=this.skillFormGroup.value.Skills;
    this.SkillA = this.skillFormGroup.value.Skills;
    // console.log(this.Skills.value)
    console.log(this.SkillA);
    // debugger;

    this.email = this.firstFormGroup.controls['email'].value;
    this.name = this.firstFormGroup.controls['name'].value;
    this.phone = this.firstFormGroup.controls['phone'].value;
    this.experience = this.firstFormGroup.controls['experience'].value;

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
    console.log(this.status);
    this.updateData = [
      {
        canPhone: this.phone,
        canName: this.name,
        EmailId: this.email,
        canExperience: this.experience,
        skills: this.SkillA,
        canId: this.canId,
        Candidatestatus: this.Candidatestatus,
      },
    ];
    console.log(this.updateData);

    if (this.status) {
      this._service.updateCandidateStatus(this.updateData).subscribe((res) => {
        console.log(res);
      });
    } else {
      this._service
        .sendingCandidateDataToServer(
          this.email,
          this.phone,
          this.name,
          this.experience,
          this.SkillA
        )
        .subscribe((response: any) => {
          console.log(response);
        });
    }
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
    // debugger;
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
    this.count++;
    // console.log('clicked', this.count);

    // while (this.count) {
    //   if (this.skillData) {
    //     this.count < 3;
    //   } else {
    //     this.count < 6;
    //   }

      const skill = new FormGroup({
        skillId: new FormControl<number>(0),
        cmpId: new FormControl<number>(0),
      });

      this.Skills.push(skill);
    // }
    // console.log(skill);
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

  checkExistingcandidate() {
    this.email = this.firstFormGroup.controls['email'].value;
    this.sEmail = this.fifthFormGroup.controls['searchEmail'].value;
    console.log(this.sEmail);
    // console.log(this.email);

    this._service.GettingDataViaEmailId(this.sEmail).subscribe((res) => {
      // console.log(res);
      this.edata = res;
      this.eRes = this.edata;
      console.log(this.eRes);

      console.log(this.edata[0].canName);

      // this.firstFormGroup.setValue.name(this.eRes[0].canName)
      // , phone: this.eRes[0].canPhone, experience:this.eRes[0].canExperience
      this.firstFormGroup.controls.name.setValue(this.edata[0].canName);
      this.firstFormGroup.controls.email.setValue(this.edata[0].EmailId);
      this.firstFormGroup.controls.phone.setValue(this.edata[0].canPhone);
      this.firstFormGroup.controls.experience.setValue(
        this.edata[0].canExperience
      );

      // this.firstFormGroup.setValue.name(this.eRes[0].canName)
    });

    this._service
      .gettingCandidateDatawithCandidateskill(this.sEmail)
      .subscribe((res) => {
        this.skillData = res;
        this.status = true;

        console.log(this.skillData);

        this.skillArray = this.skillData.data[0].skills;
        console.log(this.skillArray[1].skillName);
        this.canId = this.skillData.data[0].canId;
        this.Candidatestatus = this.skillData.data[0].Candidatestatus;
        console.log(this.Candidatestatus);
      // this.skillFormGroup.controls.skillId.setValue(this.skillArray[1].skillName);


        console.log(this.canId);
        console.log(this.status);
      });
    if (this.skillData) {
      this.status = true;
    }
  }
  showCandidateAssesmentStatus() {
    // this.email = this.firstFormGroup.controls['email'].value;
    this.sEmail = this.fifthFormGroup.controls['searchEmail'].value;
  }
}
