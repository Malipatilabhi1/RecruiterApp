import { Component, Inject, OnInit } from '@angular/core';
import {userIdToken} from '../../app/header/header.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginDisplay = false;
  
  
  constructor() { }

  ngOnInit(): void {
   
  }

  
}