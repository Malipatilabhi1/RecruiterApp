import { ExpressionType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { dialogClose } from '@syncfusion/ej2-angular-richtexteditor';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
	this.dialogRef.updateSize('100%', '90%');
  }
  // chartOptions = {
	// 	animationEnabled: true,
	// 	exportEnabled: true,
	// 	title:{
	// 		text: "Assessment Score"   
	// 	},
	// 	axisX:{
	// 		title: "Skills"
      
	// 	},
	// 	axisY:{
	// 		title: "Percentage"
	// 	},
	// 	toolTip:  {
	// 		shared: true
	// 	},
	// 	legend: {
	// 		horizontalAlign: "right",
	// 		verticalAlign: "center",
	// 		reversed: true        
	// 	},
	// 	data: [{
	// 		type: "stackedColumn100",
	// 		name: "Skills",
	// 		showInLegend: "true",
	// 		indexLabel: "#percent %",
	// 		indexLabelPlacement: "inside",
	// 		indexLabelFontColor: "white",
	// 		dataPoints: [
	// 			{  y: 4, label: "Angular"},
	// 			{  y: 2, label: "C#" },
	// 			{  y: 6, label: ".Net" },
	// 			{  y: 2, label: "Python" },
	// 			{  y: 5, label: "Azur"},
       
	// 		]
	// 	}, 
  //   {
	// 		type: "stackedColumn100",
	// 		name: "Girls",
	// 		showInLegend: "true",
	// 		indexLabel: "#percent %",
	// 		indexLabelPlacement: "inside",
	// 		indexLabelFontColor: "white",
	// 		dataPoints: [
	// 			{  y: 22, label: "Cafeteria"},
	// 			{  y: 17, label: "Lounge" },
	// 			{  y: 32, label: "Games Room" },
	// 			{  y: 48, label: "Lecture Hall" },
	// 			{  y: 25, label: "Library"}
	// 		]
	// 	}
  // ]
	// }
  chart: any;
	
  chartOptions = {
    title:{
      text: "Assessment Details"  
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
      dataPoints: [
        { x: 1, y: 18,label: "Angular 90%"},
        { x: 2, y: 11.5 ,label: "C# 57%"},
        { x: 3, y: 15 ,label: ".Net 75%"},
        { x: 4, y: 5 ,label: "Python 25%"},
        { x: 5, y: 12 ,label: "SQL 60%"},
        // { x: 6, y: 18,label: "Angular 90%"},
        // { x: 7, y: 11.5 ,label: "C# 57%"},
        // { x: 8, y: 15 ,label: ".Net 75%"},
        // { x: 9, y: 5 ,label: "Python 25%"},
       
        
      ]
    }]
  }	

  popup(){
   
  }
  
  

}
