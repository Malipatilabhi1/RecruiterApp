import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentScreenComponent } from './assesment-screen/assesment-screen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InterviewerScreenComponent } from './interviewer-screen/interviewer-screen.component';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';
import { SidebarContentComponent } from './sidebar-content/sidebar-content.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile-creation', component: ProfileCreationComponent },
  { path: 'side', component: SidebarContentComponent },
  { path: 'sign', component: SignInPageComponent },
  { path: 'inter', component: InterviewerScreenComponent },
  { path: 'asses', component: AssesmentScreenComponent },

  { path: '', component: InterviewerScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
