import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/user/sign-up/sign-up.component';
import {UserLandingComponent} from './components/user/user-landing/user-landing.component';
import {CompletedTrainingComponent} from './components/user/completed-training/completed-training.component';
import {OngoingTrainingComponent} from './components/user/ongoing-training/ongoing-training.component';
import {HomeComponent} from './components/home/home.component';
import {SearchTrainingsComponent} from './components/user/search-trainings/search-trainings.component';
import {MentorCompletedTrainingsComponent} from './components/mentor/mentor-completed-trainings/mentor-completed-trainings.component'
import {AdminEditTechComponent} from './components/admin/admin-edit-tech/admin-edit-tech.component'
import {AdminUserListComponent} from './components/admin/admin-user-list/admin-user-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full', },
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/signup', component: SignUpComponent },
  { path: 'user', component: UserLandingComponent },
  { path: 'completed-trainings', component: CompletedTrainingComponent },
  { path: 'ongoing-trainings', component: OngoingTrainingComponent },
  { path: 'home', component: HomeComponent },
  {path: 'search', component: SearchTrainingsComponent},
  {path: 'mentor/completed-trainings', component: MentorCompletedTrainingsComponent},
  {path: 'edit-tech', component: AdminEditTechComponent},
  {path: 'user-list', component: AdminUserListComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
