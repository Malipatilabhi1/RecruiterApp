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

  /// this function signIn help to authenticate the user and after successful authentication it
  /// will redirect to next Screen of our Application.
  signIn() {
    window.location.replace('http://localhost:3000/auth/signin');
  }
}
