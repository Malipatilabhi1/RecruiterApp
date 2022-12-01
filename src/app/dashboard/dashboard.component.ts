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


 





  
}