import { ComponentFixture, TestBed ,async,inject} from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AssesmentScreenComponent } from './assesment-screen.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports

import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Component } from '@angular/core';

describe('AssesmentScreenComponent', () => {
  let component: AssesmentScreenComponent;
  let fixture: ComponentFixture<AssesmentScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssesmentScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssesmentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
// describe('HtttpClient testing', () => {
//   let httpClient: HttpClient;
//   let httpTestingController: HttpTestingController;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports:[HttpClientTestingModule]
//     });
//     httpClient=TestBed.get(HttpClient);
//     httpTestingController=TestBed.get(HttpTestingController);
//   });

//   it('should be created :AssesmentScreenComponent ', inject([AssesmentScreenComponent],(Component:AssesmentScreenComponent)=>{
//     expect(Component).toBeTruthy();
//   }));
  
// });
