import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';


@Injectable({
  providedIn: 'root'
})
export class DataFileService {

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
    })

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
    });
  }

  GettingDataViaEmailId(emailId: any) {
   
    return this._http.post('http://localhost:3000/candidateManager/candidateSkill',
      {
        emailId,
      }
    );
  }

  gettingCandidateDatawithCandidateskill(emailId: any) {
    this.candidateEmail=emailId;
    return this._http.post(
      'http://localhost:3000/candidateManager/candidateskill',

      {
        emailId,
      }
    );
  }

  gettingDataForScheduler(canId: any) {
    return this._http.post(
      'http://localhost:3000/candidateManager/displayCandidateSkills',
      {
        canId,
      }
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
      }
    );
  }

  updateCandidateStatus(data:any){
    return this._http.post('http://localhost:3000/candidateManager/updateCandidateStatus',
    {
      data
    }
    )
  }
  getAssessments(emailId:any){
    return this._http.post<any>('http://localhost:3000/candidateManager/candidateSkill',
    {emailId}
  ).subscribe(response=>{
    this.Assessments=response.data;
  })
  }
}
