import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, 
  Input, OnInit, OnChanges, Output, SimpleChanges, ElementRef } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';

import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataFileService } from '../data-file.service';
import { FormData } from '../form-data'; 

@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileCreationComponent implements OnInit{

  pArray: any = [];
  updateData: any;
  Candidatestatus: any;
  canId: any;
  status: boolean = false;
  skillData: any;
  skillArray: any;
  edata: any;
  eRes: any;
  arr: any = [];
  sEmail: any;
  Skill: any = ['angular','c#'];
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
    private _service:DataFileService,
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
    Skills: new FormArray([
      new FormGroup({
        skillId: new FormControl<number[]>([0]),
        cmpId: new FormControl<number[]>([0]),
      }),
    ]),
  });
  
  isLinear = false;

  email: any;
  name: any;
  phone: any;
  experience: any;
  SkillA: any = [];


  storeDatas() {
    this.SkillA = this.skillFormGroup.value.Skills;
    console.log(this.SkillA);

    this.email = this.firstFormGroup.controls['email'].value;
    this.name = this.firstFormGroup.controls['name'].value;
    this.phone = this.firstFormGroup.controls['phone'].value;
    this.experience = this.firstFormGroup.controls['experience'].value;

   
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
      }
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
    const skill = new FormGroup({
      skillId: new FormControl<number>(0),
      cmpId: new FormControl<number>(0),
    });

    this.Skills.push(skill);
    console.log(skill);
  }

  

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
    debugger
    this._service.GettingDataViaEmailId(this.sEmail).subscribe((res) => {
      // console.log(res);
      this.edata = res;
      this.eRes = this.edata.data;
      // console.log(this.eRes);
      
      // console.log(this.edata[0].canName);

      // this.firstFormGroup.setValue.name(this.eRes[0].canName)
      // , phone: this.eRes[0].canPhone, experience:this.eRes[0].canExperience
      this.firstFormGroup.controls.name.setValue(this.eRes[0].canName);
      this.firstFormGroup.controls.email.setValue(this.eRes[0].EmailId);
      this.firstFormGroup.controls.phone.setValue(this.eRes[0].canPhone);
      this.firstFormGroup.controls.experience.setValue(
        this.eRes[0].canExperience
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