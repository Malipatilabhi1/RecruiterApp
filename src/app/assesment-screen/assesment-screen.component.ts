import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assesment-screen',
  templateUrl: './assesment-screen.component.html',
  styleUrls: ['./assesment-screen.component.css'],
})
export class AssesmentScreenComponent implements OnInit {
  arr: any = [];
  constructor(private _http: HttpClient, private _navigate:Router) {}

  ngOnInit(): void {}

  gettingDataFromDatabase() {
    this._http.get('').subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  startAssesment(){
    this._navigate.navigate(['inter']);
    console.log("clicked");
    
  }
}
