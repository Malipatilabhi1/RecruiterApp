import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assesment-screen',
  templateUrl: './assesment-screen.component.html',
  styleUrls: ['./assesment-screen.component.css']
})
export class AssesmentScreenComponent implements OnInit {

  

  arr: any = [];
  constructor(private http: HttpClient, private _navigate:Router) {}

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(){
    debugger;
    this.http.get<any>('http://localhost:3000/profileManager').subscribe(
      response=>{
        this.arr=response.data;
        console.log(this.arr);  
      }
    );
  }

  startAssesment(){
    this._navigate.navigate(['inter']);
    console.log("clicked");
    
  }
}
