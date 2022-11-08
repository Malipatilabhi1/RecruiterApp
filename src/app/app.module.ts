import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ScrollingModule } from '@angular/cdk/scrolling';
import {MatGridListModule} from '@angular/material/grid-list'
import { AngularEditorModule } from '@kolkov/angular-editor';
import {NgxPaginationModule} from 'ngx-pagination';


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
    
    NgxPaginationModule,
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
