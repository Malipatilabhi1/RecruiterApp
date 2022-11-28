import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arr: any=[];
  public category:any=[];
  public level:any=[];  

  constructor(private http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    
  }

  profileForm=this.formBuilder.group({
    Question:[''],
    Answer:[''],
    catid:[''],
    Lvlid:['']
  })
  catForm=this.formBuilder.group({
    catid:[''],
    catName:['']
  })
  
  saveData()
  {
    this.http.post('https://recruiterapp-dbb97-default-rtdb.firebaseio.com/QstnAns.json',this.profileForm.value)
    .subscribe(response =>console.log(response)); 
  }

  saveCat()
  {
    this.http.post('https://recruiterapp-dbb97-default-rtdb.firebaseio.com/Category.json',this.catForm.value)
    .subscribe(response =>console.log(response)); 
  }


  columnChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Column Chart in Material UI Tabs',
    },
    data: [
    {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: 'column',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};

pieChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Pie Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
    {
        type: 'pie',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};

lineChartOptions = {
    animationEnabled: true,
    title: {
    text: 'Angular Line Chart in Material UI Tabs',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
    {
        type: 'line',
        dataPoints: [
        { label: 'apple', y: 10 },
        { label: 'orange', y: 15 },
        { label: 'banana', y: 25 },
        { label: 'mango', y: 30 },
        { label: 'grape', y: 28 },
        ],
    },
    ],
};

  
}