import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{FormBuilder} from '@angular/forms';
import { DataFileService } from '../data-file.service';

@Component({
  selector: 'app-assesment-screen',
  templateUrl: './assesment-screen.component.html',
  styleUrls: ['./assesment-screen.component.css']
})
export class AssesmentScreenComponent implements OnInit {

  

  arr: any = [];
  skillA:any=[];
  constructor(
     private http: HttpClient,
     private _navigate:Router,
     private fb:FormBuilder,
    
     ) {}

  ngOnInit(): void {
    this.getCandidates();
  }
  

  getCandidates(){
    debugger;
    this.http.get<any>('http://localhost:3000/profileManager').subscribe(
      response=>{
        this.arr=response.data;
        this.skillA=response.data.skills;
        console.log(this.arr);
        this.filterCandidate()     
      }
    );
  }
  Farr:any=[];
  Rarr:any=[];

  filterCandidate(){
    for(let i=0;i<=this.arr.length;i++){
      if(i<=3)
      {
        this.Farr.push(this.arr[i]);
        
      }else{
        this.Rarr.push(this.arr[i]);
        
      }
    }
    console.log(this.Farr);
    console.log(this.Rarr);
  }
  

  sendData(id:any,name:any,skillarray:any){
    debugger;
    // this.dfs.Intermediate(id,name,skillarray);
    this.http.post('',
    {
      
    }).subscribe(
      response=>{
        
      }
    )
  }

  startAssesment(){
    this._navigate.navigate(['inter']);
    console.log("clicked"); 
  }
}
