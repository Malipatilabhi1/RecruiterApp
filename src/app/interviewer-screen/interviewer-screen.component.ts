import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgModel } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FormGroup,FormControl } from '@angular/forms';


@Component({
  selector: 'app-interviewer-screen',
  templateUrl: './interviewer-screen.component.html',
  styleUrls: ['./interviewer-screen.component.css']
})
export class InterviewerScreenComponent implements OnInit {
  
  arr:any=[
          {Question:'What is TypeScript?',
          Answer:'TypeScript is a superset of JavaScript that offers excellent consistency. It is highly recommended, as it provides some syntactic sugar and makes the code base more comfortable to understand and maintain.',skillId:2,complexity:'Easy'},
          {Question:' What is enum?' ,Answer:'An enum is a value type with a set of related named constants often referred to as an enumerator list. The enum keyword is used to declare an enumeration. It is a primitive data type that is user-defined',skillId:2,complexity:'Easy'}, 
          {Question:'What is the difference between constant and readonly?',
          Answer:'Const is nothing but "constant", a variable of which the value is constant but at compile time. Its mandatory to assign a value to it. By default, a const is static and we cannot change the value of a const variable throughout the entire program',skillId:2,complexity:'Easy'},
          {Question:' What is C#? ',Answer:'C# is an object-oriented, type-safe, and managed language that is compiled by .Net framework to generate Microsoft Intermediate Language.',skillId:1,complexity:'Easy'},
          {Question:'What is the Constructor Chaining ?',Answer:'Constructor chaining is a way to connect two or more classes in a relationship as Inheritance. In Constructor Chaining, every child class constructor is mapped to a parent class Constructor implicitly by base keyword, so when you create an instance of the child class, it will call the parent’s class Constructor. Without it, inheritance is not possible.',skillId:2,complexity:'Medium'},
          {Question:'What is a Virtual Method?',Answer:'A virtual method is a method that can be redefined in derived classes. A virtual method has an implementation in a base class as well as derived the class. It is used when a methods basic functionality is the same but sometimes more functionality is needed in the derived class. A virtual method is created in the base class that can be overridden in the derived class. We create a virtual method in the base class using the virtual keyword and that method is overridden in the derived class using the override keyword.',skillId:2,complexity:'Medium'},
          {Question:'What is an object?',Answer:'An object is a class instance that can be used to access class methods. The "New" keyword can be used to construct an object.',skillId:1,complexity:'Easy'},
          {Question:'Explain the four steps involved in the C# code compilation',Answer:'Four steps of code compilation in C# include'+
          ' 1.Source code compilation in managed code.2.Newly created code is clubbed with assembly code.3.The Common Language Runtime (CLR) is loaded.4.Assembly execution is done through CLR.',skillId:1,complexity:'Medium'},
      ];
  
        Skill:any=[{skillId:2,catname:'Angular'},{skillId:1,catname:'C#'},{skillId:3,catname:'SQL'}]
        Complexity:any=[{lvlid:1,complexity:'Easy'}, {lvlid:2,complexity:'Medium'}, {lvlid:3,complexity:'Hard'}]
  // arr: any=[];


  recruiterData=this.formBuilder.group({
    category:[''],
    level:[''],
    weightage:['']
  });

  showMe:boolean=true;
  public categoryA:any=[];
  public levelA:any=[];
  nextI=0;
  i=0;
  Today: any=new Date();
  sliderOutput=0;

  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getData();
  }

  hideAnswer()
  {
    this.showMe=!this.showMe;
  }

  // selectedOne()
  // {
  //   return this.levelA[this.i];
  // }
  updateSetting(event:any)
  {
    this.sliderOutput=event.value;
    // console.log(this.sliderOutput);
  }

  editorConfig1:AngularEditorConfig={
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '140px',
      maxHeight: 'auto',
      width: '50%',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
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
    ] 
  }
  editorConfig:AngularEditorConfig={
    editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '100px',
      maxHeight: 'auto',
      width: '50%',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: false,
      showToolbar: false,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
  }
  
  
  getData(){
    debugger;
     this.httpClient.get<any>('http://localhost:3000/qaManager').subscribe(
      response=>{
        this.arr=response;
        console.log(response);
        // console.log(this.arr);
      }
    );
  }
  // getLevel(){
  //   this.httpClient.get<any>('https://recruiterapp-dbb97-default-rtdb.firebaseio.com').subscribe(
  //     response=>{
  //       this.level=response;
  //       console.log(response);
  //     }
  //   );
  // }

  

  onSelect(data:any)
  {
    debugger;
  //  this.categoryA=this.arr.filter((e:any)=>e.catid==data)
   this.categoryA=this.arr.filter((e:any)=>e.skillId==data)

   console.log(this.categoryA);
  }

  arrayLength=0;

  onSelectC(value:any)
  { 
    debugger;
    this.nextI=0;
  //  this.levelA=this.categoryA.filter((e:any)=>e.lvlid==value)
    this.levelA=this.categoryA.filter((e:any)=>e.complexity==value)
    

     console.log(this.levelA);
    this.arrayLength=this.levelA.length;
    this.question=this.levelA[0].Question;
    this.answer=this.levelA[0].Answer;
    this.nextI++;  
  }
  
    public question:any='';
    public answer:any='';
    ques:boolean=false;
    public QunAns:any=[];
    
  nextQuestion(data:any){
    debugger;
    if(this.nextI<this.arrayLength)
    {
      if(data === "next"){
        this.i++;
        this.question = this.levelA[this.i].Question;
        this.answer = this.levelA[this.i].Answer;
        this.nextI++;   
      }
    }else{
      alert("No More Questions")
    } 
  }

  privQuestion(data:any)
  {
    if(data=== "prev"){
      this.ques = true;
      this.i--;
      this.question = this.levelA[this.i].Question;
      this.answer = this.levelA[this.i].Answer;
      this.nextI--;
    }
    this.ques = false;
  }

  formatLabel(value:number){
    
    if(value>=5){
      return "L"+Math.round(value/5);
      console.log(Math.round(value/5))
    }
    // console.log(value/5);
    return value;
  }
}
