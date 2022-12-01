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
  constructor(private _http:HttpClient) { }

  Intermediate(data:any)
  {
    this.arr=data;
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

  // sendingCandidateDataToServer(emailId:any,phone:any,name:any,experience:any,skills:number) {
  //   this._http
  //     .post('http://localhost:3000/candidateManager', {
  //       emailId: ProfileCreationComponent.Email,

  //       phone: ProfileCreationComponent.PhoneNo,

  //       name: ProfileCreationComponent.Name,

  //       experience: ProfileCreationComponent.Experiance,

  //       skills: [
  //         {
  //           skillId: ProfileCreationComponent.sID1,

  //           cmpId: ProfileCreationComponent.cId1,
  //         },
  //         {
  //           skillId: ProfileCreationComponent.sID2,

  //           cmpId: ProfileCreationComponent.cId2,
  //         },
  //         {
  //           skillId: ProfileCreationComponent.sID3,

  //           cmpId: ProfileCreationComponent.cId3,
  //         },
  //       ],
  //     })
  //     .subscribe(
  //       (res) => {
  //         console.log(res);
  //       },
  //       (error) => {
  //         console.warn(error);
  //       }
  //     );
  // }
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
    return this._http.post(
      'http://localhost:3000/candidateManager/candidateskill',

      {
        emailId,
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
