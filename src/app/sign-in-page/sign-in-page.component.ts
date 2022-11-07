import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
})
export class SignInPageComponent implements OnInit {
  isAuthentication: boolean = false;
  constructor(private _http: HttpClient, private _navigate: Router) {}

  ngOnInit(): void {}

  // singnIn() {
  //   this._http.get('http://localhost:3000/').subscribe((res) => {
  //     console.log(res);
  //   });
  //   this.isAuthentication = true;
  // }

  // nextStepAfterSignIn(){
    signIn() {

    window.location.replace('http://localhost:3000/auth/signin');
    // this._http
    //   .get('http://localhost:3000/auth/signin', {
    //     // headers: new HttpHeaders({
    //     //   'Content-Type': 'application/json',
    //     //   'Access-Control-Allow-Origin': '*',
    //     // })
    //   })
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    // this._navigate.navigate(['/dashboard']);

    // fetch('http://localhost:3000/auth/signin', {
    //   mode: 'no-cors',
    //   method: 'GET',
    // })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }
}
