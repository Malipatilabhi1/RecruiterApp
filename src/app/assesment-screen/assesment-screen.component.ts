import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{FormBuilder} from '@angular/forms';
import { DataFileService } from '../data-file.service';
import { Pipe,PipeTransform } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import { EditDataComponent } from '../edit-data/edit-data.component';
import { ScoreComponent } from '../score/score.component';

import { style } from '@angular/animations';
// import { baseColors, Label } from 'ng2-charts';



@Component({
  selector: 'app-assesment-screen',
  templateUrl: './assesment-screen.component.html',
  styleUrls: ['./assesment-screen.component.css']
})
export class AssesmentScreenComponent implements OnInit {
  
  arr: any = [];
  skillA:any=[];
  buttonDisabled:boolean;
  search : String;
  Searchvalue:string;
  Searchvalue1:string;
  Searchvalue2:string;
  start_date:string;
  end_date:string;
  Farr:any=[];
  Rarr:any=[];
  statuss:any="closed";
  dialogRef: MatDialogRef <any> ;

  constructor(
     private http: HttpClient,
     private _navigate:Router,
     private fb:FormBuilder,
     private dfs:DataFileService,
     private dialog: MatDialog
     ) {
      
     }  
     
  ngOnInit(): void {
    this.getCandidates();
  }
  

  getCandidates(){
    debugger;
    this.http.post<any>('http://localhost:3000/cardsFilterManager',{}).subscribe(
      response=>{
        // console.log(response)
        this.arr=response.result;
        this.skillA=response.result.skills;
        console.log(this.arr);
        this.filterCandidate()     
      }
    );
  }
  

  filterCandidate(){
 
  }
  sendData(data:any){
    debugger;
    this.dfs.Intermediate(data);
  }

  delete(){
    
  }
  

  openDialogEdit(value:any){
   
    this.dialog.open(EditDataComponent,
      {
        data:{
          value,
          style:"width:80%, height:80% "
        }
      });
  }
  
  openDialogScore(value:any){
    this.sendData(value)
    this.dialogRef = this.dialog.open(ScoreComponent, {
     data:{
      value,
      style:"width:40%, height:80% "
     }
  });   
  }


  // searchByStatus(status:any){
  //   debugger
    
  // }

  searchFilter(status:any,name:any,emailId:any,startDate:any,endDate:any){
    console.log(this.start_date)
    console.log(startDate)
    debugger
    this.http.post<any>('http://localhost:3000/cardsFilterManager',
    {
      status,name,emailId,startDate,endDate
    }).subscribe(
      response=>{ 
        this.arr=response.result;
       })  
  }

  reset(){
    this.Searchvalue="";
    this.Searchvalue="";
    this.Searchvalue1="";
    this.Searchvalue2="";
    this.start_date="";
    this.end_date="";
  }
}

