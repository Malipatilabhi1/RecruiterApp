import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataFileService } from '../data-file.service';
import { MatDialog ,MatDialogRef} from '@angular/material/dialog';
import { ScoreComponent } from '../score/score.component';
import {userIdToken} from '../../app/header/header.component';

@Component({
  selector: 'app-interview-info',
  templateUrl: './interview-info.component.html',
  styleUrls: ['./interview-info.component.css']
})
export class InterviewInfoComponent implements OnInit {

  headers = new HttpHeaders({'Authorization':`Bearer ${userIdToken}`});
  arr: any = [];
  assignCandidates:any=[];
  skillA:any=[];
  buttonDisabled:boolean;
  search : String;
  Searchvalue:string;
  Searchvalue1:string;
  Searchvalue2:string;
  start_date:string;
  end_date:string;
  InterviewDate:any;
  dialogRef: MatDialogRef <any> ;

  constructor(private http: HttpClient,private dfs:DataFileService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(){
    debugger;
    this.http.post<any>('http://localhost:3000/InterviewFilterManager',{},{headers:this.headers}).subscribe(
      response=>{
        console.log(response)
        this.assignCandidates=response.result;
        // this.skillA=response.result.skills;
        console.log(this.assignCandidates);
        this.InterviewDate=formatDate(this.arr.date, 'MM/dd/yyyy', 'en-US');  
          
      }
    );
  }
  openDialogScore(value:any){
    
    this.dfs.Intermediate(value);

    this.dialogRef = this.dialog.open(ScoreComponent, {
      data:{
       value,
       style:"width:40%, height:80% "
      }
   });   
  //   this.dialogRef = this.dialog.open(ScoreComponent, {
  //    data:{
  //     value,
  //     style:"width:40%, height:80% "
  //    }
  // });   
  }

  searchFilter(status:any,name:any,emailId:any,startDate:any,endDate:any){
    console.log(this.start_date)
    console.log(startDate)
    debugger
    this.http.post<any>('http://localhost:3000/InterviewFilterManager',
    {
      status,name,emailId,startDate,endDate
    },{headers:this.headers}).subscribe(
      response=>{ 
        this.assignCandidates=response.result;
        console.log(this.assignCandidates);
       })  
  }

  sendData(data:any){
    debugger;
    this.dfs.Intermediate(data);
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
