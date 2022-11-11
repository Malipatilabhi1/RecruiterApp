import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assesment-screen',
  templateUrl: './assesment-screen.component.html',
  styleUrls: ['./assesment-screen.component.css'],
})
export class AssesmentScreenComponent implements OnInit {
  // arr: any = [];
  constructor(private _http: HttpClient, private _navigate: Router) {}

  ngOnInit(): void {
    this.getCandidates();
  }

  arr: any = [];
  skillA: any = [];

  getCandidates() {
    debugger;
    this._http
      .get<any>('http://localhost:3000/profileManager')
      .subscribe((response) => {
        this.arr = response.data;
        this.skillA = response.data.skills;
        console.log(this.arr);
        localStorage.setItem('value', JSON.stringify(this.arr));
      });
  }

  sendData(id: any, name: any, skillarray: any) {
    debugger;
    // this.dfs.Intermediate(id,name,skillarray);
    this._http.post('', {}).subscribe((response) => {});
  }

  startAssesment() {
    this._navigate.navigate(['inter']);
    console.log('clicked');
  }
}
