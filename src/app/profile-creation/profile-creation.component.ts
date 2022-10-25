import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.css']
})
export class ProfileCreationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm=this.formBuilder.group({
    name:[''],
    message:[],
    skill:[''],
    weightage:['']
  })

  formatLabel(value:number){
    if(value>=5){
      return "L"+Math.round(value/5);
    }
    return value;
  }
}
