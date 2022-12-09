import { ExpressionType } from '@angular/compiler';
import { Component, OnInit,Inject } from '@angular/core';
import { dialogClose } from '@syncfusion/ej2-angular-richtexteditor';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DataFileService } from '../data-file.service';
import {userIdToken} from '../../app/header/header.component';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  
    
  headers = new HttpHeaders({'Authorization':`Bearer ${userIdToken}`});

  canId:any;
  Date:any;
  array:any=[];
  scoredata:any=[];
 
  dataPoints:any=[];
  constructor(public dialogRef: MatDialogRef<any>,private http:HttpClient,private dfs:DataFileService) { 
    
    this.dialogRef.updateSize('50%', '75%'); 
  }
  // constructor(private http:HttpClient) { 
    
  // }

  ngOnInit(): void {   
    this.scoredata=this.dfs.arr;
    console.log(this.scoredata)
    this.canId=this.scoredata.canId;
    this.Date=this.scoredata.date;
   this.getData(this.canId,this.Date);
    this.chart.chartOptions.render();
  }
  
  chart: any;
 

  chartOptions = {
    title:{
      text: "Assessment Details"  
    },
    toolTip:{
      
      content:"No_of_Questions:{Question}<br/>TotalScore:{score}<br/>scored:{scored}" ,
    },
	// axisY:{
	// 	title: "",
	// 	tickLength: 0,
	// 	lineThickness:0,
	// 	margin:0,
	// 	labelFormatter: function() {
	// 	   return "";
	// 	}
	//   },
    animationEnabled: true,
    data: [{        
      type: "column",
      
      dataPoints: this.dataPoints
      // [
		      
      //   { x: 1, y: 15,label: "Angular 90%"},
      //   { x: 2, y: 11.5 ,label: "C# 57%"},
      //   { x: 3, y: 15 ,label: ".Net 75%"},
      //   { x: 4, y: 5 ,label: "Python 25%"},
      //   { x: 5, y: 12 ,label: "SQL 60%"},          
      // ]
      
    }]
     
  }	
      

  getData(canId:any,Date:any){
    this.http.post<any>('http://localhost:3000/cardsScoreManager/scores',
    {
    canId,Date
    },{headers:this.headers}).subscribe(
      response=>{   
       
     this.array=response.val;
     console.log(this.array)
     this.getval();
    
  })
 
}
i:any=0;
  getval(){
    for (this.i = 0; this.i <= this.array.length-1; this.i++){
    this.dataPoints.push({X:this.array[this.i].skillScore,y:this.array[this.i].percentage,label:this.array[this.i].skillName+" "+this.array[this.i].percentage+"%",score:this.array[this.i].skillScore,scored:this.array[this.i].candidateScore,Question:this.array[this.i].count});
    console.log(this.dataPoints)
    // (this.array[i].skillNam,this.array[i].percentage+"%") this.array[this.i].candidateScore
  }

  this.chartOptions.data[0].dataPoints = this.dataPoints;
      
     
  console.log(this.dataPoints)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
