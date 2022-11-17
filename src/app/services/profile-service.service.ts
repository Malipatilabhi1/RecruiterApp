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
    name: any,
    phone: any,
    experiance: any,
    skills: number
  ) {
    return this._http.post('http://localhost:3000/candidateManager/profile', {
      emailId,
      phone,
      name,
      experiance,
      skills,
    });
  }
}
