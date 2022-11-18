import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{FormBuilder} from '@angular/forms';
import { DataFileService } from '../data-file.service';
import { Pipe,PipeTransform } from '@angular/core';
// import {MatDialog} from '@angular/material'


// import {
//   ApexAxisChartSeries,
//   ApexChart,
//   ChartComponent,
//   ApexDataLabels,
//   ApexXAxis,
//   ApexPlotOptions
// } from "ng-apexcharts";


// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   xaxis: ApexXAxis;
// }; 

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
    
     
    
     ) {
    //   this.chartOptions = {
    //     series: [
    //       {
    //         name: "",
    //         data: [
    //           1,
    //           2,
    //           3,
    //           4,
    //           5,
    //           6,
    //           7,
    //           8,
    //           9,
    //           10,
    //           11,
    //           12,
    //           13,
    //           14,
    //           15,
    //           16,
    //           17,
    //           18,
    //           19
    //         ]
    //       }
    //     ],
    //     chart: {
    //       type: "bar",
    //       height: 350
    //     },
    //     plotOptions: {
    //       bar: {
    //         horizontal: true
    //       }
    //     },
    //     dataLabels: {
    //       enabled: false
    //     },
    //     xaxis: {
    //       categories: [
    //         "ANGULAR(0-100%)",
    //         "C#(0-100%)",
    //         "OOPS(0-100%)",
    //         "REACT(0-100%)",
    //         ".NET(0-100%)",
    //         "PYTHON(0-100%)"
    //       ]
    //     }
    //   };
    // }
      
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
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(editForm, {
  //     width: '250px',
  //     data: {},
  //   });
  //     dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // this.animal = result;
  //   });
  // }


}

// @Component({
//   selector: 'editForm',
//   templateUrl: 'editForm.html',
// })
// export class editForm{

// }