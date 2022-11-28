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
  search : String ="";
  Searchdata:string="";
  Searchvalue:string="";
  Searchdata1:string="";
  Searchvalue1:string="";
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
  }

  delete(){
    
  }
  searchdata(value:any){
    if(value=='status'){
      this.Searchdata='Candidatestatus';
    }
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
  openDialogScore(){
    this.dialogRef = this.dialog.open(ScoreComponent, {
      height: '90%',
      width: '90%'
  });
  
  
    
  }

}

