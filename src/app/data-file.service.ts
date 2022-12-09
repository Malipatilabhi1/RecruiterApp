import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';

import {userIdToken} from '../app/header/header.component';


@Injectable({
  providedIn: 'root'
})
export class DataFileService {

  headers = new HttpHeaders({'Authorization':`Bearer ${userIdToken}`});
  arr:any=[];
  Assessments:any=[];
  Search_email:any;
  candidateEmail:any;
  constructor(private _http:HttpClient) { }

  Intermediate(data:any)
  {
    this.arr=data;
    console.log(this.arr)
  }

  sendData(emailId:any,phone:any,name:any,experience:any,skills:number)
  {
    return this._http.post('http://localhost:3000/candidateManager/saveData',{
      emailId,
      phone,
      name,
      experience,
      skills
    },{headers:this.headers})

  }

  sendingCandidateDataToServer(
    emailId: any,
    phone: any,
    name: any,
    experience: any,
    skills: number
  ) {
    return this._http.post('http://localhost:3000/candidateManager/saveData', {
      emailId,
      phone,
      name,
      experience,
      skills,
    },{headers:this.headers});
  }

  GettingDataViaEmailId(emailId: any) {
   
    return this._http.post('http://localhost:3000/candidateManager/candidateSkill',
      {
        emailId,
      },{headers:this.headers}
    );
  }

  gettingCandidateDatawithCandidateskill(emailId: any) {
    this.candidateEmail=emailId;
    return this._http.post(
      'http://localhost:3000/candidateManager/candidateskill',

      {
        emailId,
      },{headers:this.headers}
    );
  }

  gettingDataForScheduler(canId: any) {
    return this._http.post(
      'http://localhost:3000/candidateManager/displayCandidateSkills',
      {
        canId,
      },{headers:this.headers}
    );
  }

  sendingSchedulingDataToBackend(canId:any,date:any,interviewSkills:any) {
    debugger;
    return this._http.post(
      'http://localhost:3000/candidateInterviewManager/addInterview',
      {
        canId,
        date,
        interviewSkills
      },{headers:this.headers}
    );
  }

  updateCandidateStatus(data:any){
    return this._http.post('http://localhost:3000/candidateManager/updateCandidateStatus',
    {
      data
    },{headers:this.headers}
    )
  }
  getAssessments(emailId:any){
    return this._http.post<any>('http://localhost:3000/candidateManager/candidateSkill',
    {emailId},{headers:this.headers}
  ).subscribe(response=>{
    this.Assessments=response.data;
  })
  }
}
