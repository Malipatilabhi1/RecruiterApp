import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';


@Injectable({
  providedIn: 'root'
})
export class DataFileService {

  arr:any=[];
  constructor(private _http:HttpClient) { }

  Intermediate(data:any)
  {
    this.arr=data;
  }


  sendingCandidateDataToServer() {
    this._http
      .post('http://localhost:3000/candidateManager', {
        emailId: ProfileCreationComponent.Email,

        phone: ProfileCreationComponent.PhoneNo,

        name: ProfileCreationComponent.Name,

        experience: ProfileCreationComponent.Experiance,

        skills: [
          {
            skillId: ProfileCreationComponent.sID1,

            cmpId: ProfileCreationComponent.cId1,
          },
          {
            skillId: ProfileCreationComponent.sID2,

            cmpId: ProfileCreationComponent.cId2,
          },
          {
            skillId: ProfileCreationComponent.sID3,

            cmpId: ProfileCreationComponent.cId3,
          },
        ],
      })
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.warn(error);
        }
      );
  }
}
