import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';  
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from "@angular/material/dialog";
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatGridListModule} from '@angular/material/grid-list'
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatStepperModule} from '@angular/material/stepper';
import { NgxPaginationModule } from 'ngx-pagination';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgChartsModule} from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';
import { InterviewerScreenComponent } from './interviewer-screen/interviewer-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { AssesmentScreenComponent } from './assesment-screen/assesment-screen.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ScoreComponent } from './score/score.component';

import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { FilterPipe } from './filter.pipe';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProfileCreationComponent,
    InterviewerScreenComponent,
    DashboardComponent,
    SidebarContentComponent,
    SignInPageComponent,
    AssesmentScreenComponent,
    EditDataComponent,
    ScoreComponent, 
    CanvasJSChart, FilterPipe
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    ScrollingModule,
    MatGridListModule,
    HttpClientModule,
    AngularEditorModule,
    MatStepperModule,
    NgxPaginationModule,
    RichTextEditorAllModule,
    MatDialogModule,
    NgChartsModule,
    MatTabsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
