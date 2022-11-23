import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileCreationComponent } from '../profile-creation/profile-creation.component';

@Injectable({
  providedIn: 'root',
})
export class ProfileServiceService {
  constructor(private _http: HttpClient) {}

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
    return this._http.post(
      'http://localhost:3000/candidateManager/filterEmail',
      {
        emailId,
      }
    );
  }

  gettingCandidateDatawithAssesmentId(emailId: any) {
    return this._http.post(
      'http://localhost:3000/candidateManager/candidateskill',

      {
        emailId,
      }
    );
  }
}
