import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QandAnsServiceService {
  QandAns: any = '';
  array: any = [];
  constructor(private _http: HttpClient) {}

  gettingDataFromDatabase() {
    const response = this._http.post('http://localhost:3000/qaManager', {
      complexity: 'easy',
      skillId: 'InterviewerScreenComponent.Level.lvlid',
    });

    console.log(
      response.subscribe(
        (res) => {
          console.log(res);
          this.QandAns = res;
          // console.log(this.QandAns.recordset);
          this.array = this.QandAns.recordset;
          console.log(this.array);
        },
        (error) => {
          console.warn(error);
        }
      )
    );

    // .subscribe(
    //   (res) => {
    //     console.log(res);
    //     this.QandAns = res;
    //     // console.log(this.QandAns.recordset);
    //     this.array = this.QandAns.recordset;
    //     console.log(this.array);
    //   },
    //   (error) => {
    //     console.warn(error);
    //   }
    // );

    // console.log(this.array);
  }
}
