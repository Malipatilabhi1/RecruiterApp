import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AssesmentScreenComponent } from './assesment-screen.component'; 

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
