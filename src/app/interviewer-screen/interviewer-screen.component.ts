// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgModel,FormGroup } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-interviewer-screen',
  templateUrl: './interviewer-screen.component.html',
  styleUrls: ['./interviewer-screen.component.css']
})
export class InterviewerScreenComponent implements OnInit {

  htmlContent='';
  
  arr:any=[
          {Question:'What is TypeScript',
          Answer:'TypeScript is a superset of JavaScript that offers excellent consistency. It is highly recommended, as it provides some syntactic sugar and makes the code base more comfortable to understand and maintain.',catid:1,lvlid:1},

        {Question:' What is C#?',Answer:'C# is an object-oriented, type-safe, and managed language that is compiled by .Net framework to generate Microsoft Intermediate Language.',catid:2,lvlid:1},
      ];
  
        Category:any=[{catid:1,catname:'Angular'},{catid:2,catname:'C#'},{catid:3,catname:'SQL'}]
  Level:any=[{lvlid:1,level:'Easy'},{lvlid:2,level:'Medium'},{lvlid:3,level:'Hard'}]
  // arr: any=[];


  recruiterdata=this.formBuilder.group({
    category:[''],
    level:[''],
    left:[''],
    right:[''],
    message:[''],
    weightage:[''],
    Qstn:[''],
    QAns:['']
  })

  public category:any=[];
  public level:any=[];
  public QunAns:any=[];
  nextI=0;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    
  }

  editorConfig1:AngularEditorConfig={
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '280px',
      maxHeight: 'auto',
      width: '600px',
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
      minHeight: '250px',
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
  }
  
  
  // getCategory(){
  //   debugger;
  //   this.httpClient.get<any>('https://recruiterapp-dbb97-default-rtdb.firebaseio.com/category.json').subscribe(
  //     response=>{
  //       this.category=response;
  //       console.log(response);
  //     }
  //   );
  // }
  // getLevel(){
  //   this.httpClient.get<any>('https://recruiterapp-dbb97-default-rtdb.firebaseio.com').subscribe(
  //     response=>{
  //       this.level=response;
  //       console.log(response);
  //     }
  //   );
  // }

  cat:any=0;
  onSelect(data:any)
  {
    this.cat=data;
    console.log(data);
    this.arr.forEach(function(item:any){
        
      if( item.catid == data){
        
    } 
});
  }

  onSelectL(value:any)
  { 
    debugger;
    if(this.arr.lvlid ===value && this.arr.catid === this.cat)
    {
      console.log(this.arr);
    }
  }

  
     onClick(value:string)
     {
      debugger;
      for (let i=0;i < this.arr.length; i++)
       {
        if(value=='next' && i !== this.arr.length - 1)
        {
          this.nextI=this.nextI+1;
          this.arr[this.nextI];
          
        }
        if(value=='previous' && i !== this.arr.length - 1)
        {
          this.nextI=this.nextI-1;
          this.arr[this.nextI];
        }

      }
     }
  

  formatLabel(value:number){
    if(value>=5){
      return "L"+Math.round(value/5);
    }
    return value;
  }

  clickMe(){
    console.log(this.htmlContent);
    
  }
}
