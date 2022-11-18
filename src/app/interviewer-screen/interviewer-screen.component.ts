import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgModel } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup,FormControl } from '@angular/forms';
import { bindCallback } from 'rxjs';
import { ElementRef } from '@angular/core';
import { DataFileService } from '../data-file.service';
import {formatDate } from '@angular/common';



@Component({
  selector: 'app-interviewer-screen',
  templateUrl: './interviewer-screen.component.html',
  styleUrls: ['./interviewer-screen.component.css']
})
export class InterviewerScreenComponent implements OnInit {
  
  // newArry:any=[
  //         {Question:'What is TypeScript?',
  //         Answer:'TypeScript is a superset of JavaScript that offers excellent consistency. It is highly recommended, as it provides some syntactic sugar and makes the code base more comfortable to understand and maintain.',skillId:2,complexity:'Easy'},
  //         {Question:' What is enum?' ,Answer:'An enum is a value type with a set of related named constants often referred to as an enumerator list. The enum keyword is used to declare an enumeration. It is a primitive data type that is user-defined',skillId:2,complexity:'Easy'}, 
  //         {Question:'What is the difference between constant and readonly?',
  //         Answer:'Const is nothing but "constant", a variable of which the value is constant but at compile time. Its mandatory to assign a value to it. By default, a const is static and we cannot change the value of a const variable throughout the entire program',skillId:2,complexity:'Easy'},
  //         {Question:' What is C#? ',Answer:'C# is an object-oriented, type-safe, and managed language that is compiled by .Net framework to generate Microsoft Intermediate Language.',skillId:1,complexity:'Easy'},
  //         {Question:'What is the Constructor Chaining ?',Answer:'Constructor chaining is a way to connect two or more classes in a relationship as Inheritance. In Constructor Chaining, every child class constructor is mapped to a parent class Constructor implicitly by base keyword, so when you create an instance of the child class, it will call the parent’s class Constructor. Without it, inheritance is not possible.',skillId:2,complexity:'Easy'},
  //         {Question:'What is a Virtual Method?',Answer:'A virtual method is a method that can be redefined in derived classes. A virtual method has an implementation in a base class as well as derived the class. It is used when a methods basic functionality is the same but sometimes more functionality is needed in the derived class. A virtual method is created in the base class that can be overridden in the derived class. We create a virtual method in the base class using the virtual keyword and that method is overridden in the derived class using the override keyword.',skillId:2,complexity:'Medium'},
  //         {Question:'What is an object?',Answer:'An object is a class instance that can be used to access class methods. The "New" keyword can be used to construct an object.',skillId:1,complexity:'Easy'},
  //         {Question:'Explain the four steps involved in the C# code compilation',Answer:'Four steps of code compilation in C# include'+
  //         ' 1.Source code compilation in managed code.2.Newly created code is clubbed with assembly code.3.The Common Language Runtime (CLR) is loaded.4.Assembly execution is done through CLR.',skillId:1,complexity:'Medium'},
  //     ];
  
  
  // Complexity:any=[];
  arr: any=[];      
  showMe:boolean=true;
  hideMe:boolean=false;
  nextI=0;
  i=1;
  Today: Date=new Date();
  sliderOutput=0;
  skill=0;
  complexity=0;
  public question:any='';
  public answer:any='';
  ques:boolean=false;
  public QunAns:any=[];
  keywordzz:any='';
  value = 0;
  value1='';
  candidate:any=[];
  candidateSkill:any=[];
  p: any = 0;
  CurrentTime:any;

  recruiterData=this.formBuilder.group({
    score:(''),
    note:('')
   });

  constructor(
    private formBuilder:FormBuilder,
    private httpClient:HttpClient,
    private elementRef: ElementRef,
    private dfs:DataFileService,
    ){
      
      
    }
    hour:any;
    min:any;
    sec:any;
    Time:any;
  ngOnInit(): void {
     //call api 
     let now: Date = new Date();
    this.getCandidateDetails();
    
    this.Time=now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
    console.log(now);  
    this.ExtractDate=this.Today.getMonth()+'/'+this.Today.getDate()+'/'+this.Today.getFullYear();
  }

  getCandidateDetails(){
    debugger
    this.candidate=this.dfs.arr;
    this.profile();
    console.log(this.candidate)
  }
  Asid:any='';
  CName:any;
  Email:any;
  CId:any;
  arrayLength=0;
  data:any='';
  status:any;
ExtractDate:any;

  profile(){
    this.Asid=1;
    // this.Today=this.candidate.Date;
    this.CId=this.candidate.canId;
    this.CName=this.candidate.canName;
    this.status=this.candidate.Candidatestatus;
    this.candidateSkill=this.candidate.skills;  
  }
  
  canId=2;
  RowandQuestion_number=1;
  note_value=1;
  newArry:any=[];

  getQueAns(canId:any,recld:any,Date:any,starttime:any,Candidatestatus:any,skills:any){
    debugger;
    try{
    this.httpClient.post<any>('http://localhost:3000/randomizationManager',
    {
    canId,
    recld,Date,starttime,Candidatestatus,skills
    }).subscribe(
      response=>{      
          this.newArry=response.data;
          // this.arr.push(this.newArry);
          console.log(response);
          console.log(this.newArry);
          this.update();
      }
    );
  }catch{
     ("Error")
  }
  }

  //Assessment start button 
  assesmentStart()
  {
    debugger;
    this.getQueAns(this.CId,this.RowandQuestion_number,this.ExtractDate,this.Time,this.status,this.candidateSkill);
    this.hideMe=true;
    this.keywordload();
    // this.keywordload();  
  }

  
  //duplicate method for right arrow //it use when we have api
  // nextQA()
  // {
  //   debugger;
  //   this.i++;
  //   this.updateData();
  //   this.getQueAns(this.CId,this.i);
  //   this.keywordzz=this.keywordsArray[this.i].keyword;
  //   // let id=this.i.toString();
  //   // this.fetchData(id,this.skill,this.complexity); 
  // }
  datastoring_response:any='';
  nextQA()
  {
    debugger;
    let canId=this.CId;
    let RowandQuestion_number=this.i;
    let score=this.recruiterData.controls['score'].value;
    let notes=this.recruiterData.controls['note'].value;
      
    this.httpClient.post<any>('http://localhost:3000/assessmentStagingManager/saveData',
    {
      canId,
      RowandQuestion_number,
      score,
      notes
    }).subscribe(
      response=>{
        this.datastoring_response=response.status;
        console.log(response);     
        this.i++;
        this.updateData();     
        this.getQueAns(this.CId,this.i,this.ExtractDate,this.Time,this.status,this.candidateSkill);
        this.keywordzz=this.keywordsArray[this.i].keyword;    
      },  
    );
  }

  //duplicate method for left arrow //it use when we have api
  prevQA(){
    debugger;
    this.i--;
    this.getQueAns(this.CId,this.i,this.ExtractDate,this.Time,this.status,this.candidateSkill);
  } 
  ScoreA:any=[];
  NoteA:any=[];
  Score:any='';
  Note:any='';

  update(){
    this.value=this.newArry[0].score;
    this.value1=this.newArry[0].Note;
    // this.value=this.recruiterData.controls['score'].value;
    // this.recruiterData.controls['note']=this.newArry.Note;
  }
  updateData(){
      debugger;
    var Score=this.recruiterData.controls['score'].value;
    var Note=this.recruiterData.controls['note'].value;
    this.ScoreA.push(Score);
    this.NoteA.push(Note);
    this.recruiterData.reset();
  }

  saveData(){
    debugger;
    let status=this.status;
    let canId=this.CId;
    let assessmentId=this.Asid;
    this.httpClient.post<any>('http://localhost:3000/assessmentManager/endAssessment',
    {
      status,
      canId,
      assessmentId
    }).subscribe(
      response=>{
        alert(response.status); 
        console.log(response);
      })
  }

//for hiding answer
  hideAnswer()
  {
    this.showMe=!this.showMe;
  }

  ScoreData:any='';
  //slider value
  updateSetting(event:any)
  {
    debugger
    this.sliderOutput=event;
    this.resume=true; 
  }

  //text-Editor for "Note"
  editorConfig1:AngularEditorConfig={
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '150px',
      maxHeight: 'auto',
      width: '100%',
      minWidth: '0',
      translate: 'no',
      enableToolbar: false,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',      
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: false,
    toolbarPosition: 'bottom',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ] 
  }
  
  

  
  //display candidate profile // hardcoded data
  
  // skill1:any='';
  // complexity1:any='';
  // skill2:any='';
  // complexity2:any='';
  // skill3:any='';
  // complexity3:any='';

//candidate skill // hardcoded data
  // skildata()
  // {
  //   this.skill1='C#',
  //   this.complexity1='Medium';
  // this.skill2='Angular';
  // this.complexity2='Easy';
  // this.skill3='SQL';
  // this.complexity3='Easy';
  // }

  //key words array
  keywordsArray:any=[
    {keyword:'Its mandatory to assign a value to it'},
    {keyword:'Different dimensions and size.'},
    {keyword:'Collection of similar types of data.'},
    {keyword:'comprises elements of type array.'},
    {keyword:'uesd for treating an object as an array.'},
    {keyword:'Execute independently of the primary.'},
    {keyword:'Easy to use and can be added to the toolbox.'},
    {keyword:'Angular provides several out of the box built-in features.'},
    {keyword:'value type with a set of related named constant.'},
    {keyword:'storing of data in a file'},
    {keyword:''},
    {keyword:''}, 
    {keyword:''},
    {keyword:''},
    {keyword:''},
    {keyword:''},
    // {keyword:'automatically releases the memory space'},
    // {keyword:'execute independently'},
    // {keyword:'objects cant be instantiated'},
    // {keyword:'accesse from anywhere, instance creation is not necessary'},
    // {keyword:'overridden,  virtual keyword,  Override keyword'},
    // {keyword:'exception handling, No matter if the exception code with excecute'},
    // {keyword:'restriction,  inherited,  sealed modifier'},
    // {keyword:''},
    // {keyword:'interfaces expect different data, '},
    // {keyword:'group of threads,  without interfering ,  principal threads operation'}
  ];

  //to display the keywords
  keywordload(){
    this.keywordzz=this.keywordsArray[0].keyword;
  }

  //fetching question and ans from backend
  // getQueAns(){
  //   debugger;
  //   this.httpClient.get<any>('http://localhost:3000/qaManager').subscribe(
  //     response=>{
  //       this.arr=response.data;
  //       console.log(this.arr); 
  //     }
  //   );
  // }
  // canId=2;
  // RowandQuestion_number=1;
  // getQueAns(canId:any,RowandQuestion_number:any){
  //   debugger;
  //   this.httpClient.post<any>('http://localhost:3000/assessmentStagingManager',{
  //   canId,
  //   RowandQuestion_number
  //   }).subscribe(
  //     response=>{
  //       this.arr=response.data;
  //       console.log(this.arr); 
  //     }
  //   );
  // }

  // Sid:any='';
  // Sname:any='';
  // SSkills:any=[];

  // catchData(id:any,name:any,skills:any)
  // {
  //   this.Sid=id;
  //   this.Sname=name;
  //   this.SSkills=skills;
  // }

  //fetch data from db //duplicate method for upcomming api
  


  // getSkills(){
  //   debugger;
  //   this.httpClient.get<any>('http://localhost:3000/skillsManager').subscribe(
  //     response=>{
  //       this.Skill=response.data;
  //       // console.log(this.Skill); 
  //     }
  //   );
  // }
  
  // getComplexity(){
    
  //   this.httpClient.get<any>('http://localhost:3000/ComplexityManager').subscribe(
  //     response=>{
  //       this.Complexity=response.data;
  //       // console.log(this.Complexity);
  //     }
  //   );
  // }

  // onSelectSkill(data:any)
  // {
  //   debugger;
  //  this.skill=data;
  // }
  

  // onSelectComple(data:any){
  //   this.complexity=data;

  //   let id=this.i.toString();

  //   // this.fetchData(id,this.skill,data);
  //   // this.hideMeI=true;

  // }
  
  
  
    
  //for fetching next Q/A right arrow //hardcoded value

  // nextQuestion(data:any){
  //   debugger;
    
  //     if(data === "next"){
  //       this.i++;
  //       this.nextI++;
  //       this.question ="Q: "+ this.arr[this.i].Question;
  //       this.answer = "A: "+this.arr[this.i].Answer;
  //       this.keywordzz=this.keywordsArray[this.i].keyword;
       
  //       this.updateData();
  //       this.value=0;
  //       this.ScoreData='';
  //     }
  // }
  flush(){
    this.Score='';
    this.Note='';
  }
  //for fetching previous Q/A left arrow //hardcoded value
  // privQuestion(data:any)
  // {
  //   debugger;
  //   if(data=== "prev"){
  //     this.ques = true;
  //     this.i--;
      
  //     this.question ="Q: "+ this.arr[this.i].Question;
  //       this.answer = "A: "+this.arr[this.i].Answer;
  //       this.keywordzz=this.keywordsArray[this.i].keyword;
  //     this.nextI--;
  //   }
  //   this.ques = false;
  // }
  
  resume:boolean=false;
  //slider value

  ngAfterViewInit() {   //background color
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'rgba(255, 228, 196, 0.32)';
}
}
