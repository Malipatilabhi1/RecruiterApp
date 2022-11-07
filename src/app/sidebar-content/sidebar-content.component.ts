import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css'],
})
export class SidebarContentComponent implements OnInit {
  array: any = [
    {
      Question: 'What is TypeScript?',
      Answer:
        'TypeScript is a superset of JavaScript that offers excellent consistency. It is highly recommended, as it provides some syntactic sugar and makes the code base more comfortable to understand and maintain.',
      skillId: 2,
      complexity: 'Easy',
    },
    {
      Question: ' What is enum?',
      Answer:
        'An enum is a value type with a set of related named constants often referred to as an enumerator list. The enum keyword is used to declare an enumeration. It is a primitive data type that is user-defined',
      skillId: 2,
      complexity: 'Easy',
    },
    {
      Question: 'What is the difference between constant and readonly?',
      Answer:
        'Const is nothing but "constant", a variable of which the value is constant but at compile time. Its mandatory to assign a value to it. By default, a const is static and we cannot change the value of a const variable throughout the entire program',
      skillId: 2,
      complexity: 'Easy',
    },
    {
      Question: ' What is C#? ',
      Answer:
        'C# is an object-oriented, type-safe, and managed language that is compiled by .Net framework to generate Microsoft Intermediate Language.',
      skillId: 1,
      complexity: 'Easy',
    },
    {
      Question: 'What is the Constructor Chaining ?',
      Answer:
        'Constructor chaining is a way to connect two or more classes in a relationship as Inheritance. In Constructor Chaining, every child class constructor is mapped to a parent class Constructor implicitly by base keyword, so when you create an instance of the child class, it will call the parent’s class Constructor. Without it, inheritance is not possible.',
      skillId: 2,
      complexity: 'Easy',
    },
    {
      Question: 'What is a Virtual Method?',
      Answer:
        'A virtual method is a method that can be redefined in derived classes. A virtual method has an implementation in a base class as well as derived the class. It is used when a methods basic functionality is the same but sometimes more functionality is needed in the derived class. A virtual method is created in the base class that can be overridden in the derived class. We create a virtual method in the base class using the virtual keyword and that method is overridden in the derived class using the override keyword.',
      skillId: 2,
      complexity: 'Medium',
    },
    {
      Question: 'What is an object?',
      Answer:
        'An object is a class instance that can be used to access class methods. The "New" keyword can be used to construct an object.',
      skillId: 1,
      complexity: 'Easy',
    },
    {
      Question: 'Explain the four steps involved in the C# code compilation',
      Answer:
        'Four steps of code compilation in C# include' +
        ' 1.Source code compilation in managed code.2.Newly created code is clubbed with assembly code.3.The Common Language Runtime (CLR) is loaded.4.Assembly execution is done through CLR.',
      skillId: 1,
      complexity: 'Medium',
    },
  ];

  Skill: any = [];
  Complexity: any = [];
  arr: any = [];
  p: any = 0;

  recruiterData = this.formBuilder.group({
    skillId: [''],
    level: [''],
  });

  showMe: boolean = true;
  hideMe: boolean = false;
  hideMeI: boolean = false;
  public categoryA: any = [];
  public levelA: any = [];
  nextI = 0;
  i = 0;
  Today: any = new Date();
  sliderOutput = 0;
  skill = 0;
  complexity = 0;
  public question: any = '';
  public answer: any = '';
  ques: boolean = false;
  public QunAns: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.getSkills();
    this.getComplexity();
  }

  hideAnswer() {
    this.showMe = !this.showMe;
  }

  updateSetting(event: any) {
    this.sliderOutput = event.value;
  }
  //Note Editor
  editorConfig1: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '170px',
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
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
  };

  //Additional QA Editor
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '100px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: false,
    showToolbar: false,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
  };

  fetchData(skillId: any, compId: any) {
    // debugger;
    return this.httpClient
      .post<any>('http://localhost:3000/qaManager/allQA', {
        compId,
        skillId,
      })
      .subscribe((response) => {
        // this.arr.push(response.data);
        this.arr = response.data;

        // this.question =   this.arr.Answer;
        // this.answer =  .Answer;
        console.log(this.arr);

        // console.log(this.question);
      });
  }

  getSkills() {
    // debugger;
    this.httpClient
      .get<any>('http://localhost:3000/skillsManager')
      .subscribe((response) => {
        this.Skill = response.data;
        // console.log(this.Skill);
      });
  }
  getComplexity() {
    this.httpClient
      .get<any>('http://localhost:3000/ComplexityManager')
      .subscribe((response) => {
        this.Complexity = response.data;
        // console.log(this.Complexity);
      });
  }

  onSelectSkill(data: any) {
    this.skill = data;
  }

  onSelectComple(data: any) {
    this.complexity = data;
    // let id=this.i.toString();
    this.fetchData(this.skill, data);
    this.hideMeI = true;
  }

  // onDropdown1()
  // {
  //   this.nextI=0;
  //   this.arrayLength=this.arr.length;
  //   this.question="Q: "+this.arr[0].Question;
  //   this.answer="A: "+this.arr[0].Answer;
  //   this.nextI++;
  //   this.hideMe=true;
  // }

  arrayLength = 0;

  nextQA() {
    debugger;
    this.i++;
    let id = this.i.toString();

    this.fetchData(this.skill, this.complexity);
  }
  prevQA() {
    debugger;
    this.i--;
    console.log(this.arr);
    this.question = 'Q: ' + this.arr[this.i].Question;
    this.answer = 'A: ' + this.arr[this.i].Answer;
  }

  nextQuestion(data: any) {
    debugger;
    if (this.nextI < this.arrayLength) {
      if (data === 'next') {
        this.i++;
        this.question = 'Q: ' + this.arr[this.i].Question;
        this.answer = 'A: ' + this.arr[this.i].Answer;
        this.nextI++;
      }
    } else {
      alert('No More Questions');
    }
  }

  privQuestion(data: any) {
    debugger;
    if (data === 'prev') {
      this.ques = true;
      this.i--;

      this.question = 'Q: ' + this.arr[this.i].Question;
      this.answer = 'A: ' + this.arr[this.i].Answer;
      this.nextI--;
    }
    this.ques = false;
  }

  formatLabel(value: number) {
    if (value >= 5) {
      return 'L' + Math.round(value / 5);
      // console.log(Math.round(value/5))
    }
    // console.log(value/5);
    return value;
  }
}
