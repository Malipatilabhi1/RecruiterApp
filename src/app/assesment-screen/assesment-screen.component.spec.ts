import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Candidate-ScreenComponent } from './assesment-screen.component';

describe('AssesmentScreenComponent', () => {
  let component: Candidate-ScreenComponent;
  let fixture: ComponentFixture<Candidate-ScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Candidate-ScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Candidate-ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
