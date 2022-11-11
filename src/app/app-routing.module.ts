import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentScreenComponent } from './assesment-screen/assesment-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewerScreenComponent } from './interviewer-screen/interviewer-screen.component';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
   {path:'dashboard',component:DashboardComponent},
  {path:'profile-creation',component:ProfileCreationComponent},
  {path:'QASection',component:SidebarContentComponent},
  {path:'a',component:SignInPageComponent},
  {path:'Assessment',component:InterviewerScreenComponent},
  {path:'Candidate-Info',component:AssesmentScreenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
