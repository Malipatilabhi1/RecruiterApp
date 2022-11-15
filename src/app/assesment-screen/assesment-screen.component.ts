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

  filterCandidate(){
    for(let i=0;i<=this.arr.length;i++){
      if(i<=3)
      {
        this.Farr.push(this.arr[i]);
        
      }else{
        this.Rarr.push(this.arr[i]);
        
      }
    }
    // console.log(this.Farr);
    // console.log(this.Rarr);
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
