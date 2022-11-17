import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{FormBuilder} from '@angular/forms';
import { DataFileService } from '../data-file.service';
import { Pipe,PipeTransform } from '@angular/core';

@Component({
  selector: 'app-assesment-screen',
  templateUrl: './assesment-screen.component.html',
  styleUrls: ['./assesment-screen.component.css']
})
export class AssesmentScreenComponent implements OnInit {

  

  arr: any = [];
  skillA:any=[];
  buttonDisabled:boolean;
  constructor(
     private http: HttpClient,
     private _navigate:Router,
     private fb:FormBuilder,
     private dfs:DataFileService,
    
     ) {}

  ngOnInit(): void {
    this.getCandidates();
  }
  

  getCandidates(){
    debugger;
    this.http.get<any>('http://localhost:3000/profileManager').subscribe(
      response=>{
        // console.log(response)
        this.arr=response.result;
        this.skillA=response.result.skills;
        console.log(this.arr);
        this.filterCandidate()     
      }
    );
  }
  Farr:any=[];
  Rarr:any=[];
  statuss:any="closed";

  filterCandidate(){
    
  }
  

  sendData(data:any){
    debugger;
    this.dfs.Intermediate(data);
    
      
    // .subscribe(
    //   response=>{
        
    //   }
    // )
  }

  // startAssesment(){
  //   this._navigate.navigate(['inter']);
  //   console.log("clicked"); 
  // }




  
}
