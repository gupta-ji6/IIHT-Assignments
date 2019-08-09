import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UserLandingComponent} from './user-landing/user-landing.component';
import {CompletedTrainingComponent} from './completed-training/completed-training.component';
import {OngoingTrainingComponent} from './ongoing-training/ongoing-training.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full', },
  { path: 'users', component: UserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserLandingComponent },
  { path: 'completed-trainings', component: CompletedTrainingComponent },
  { path: 'ongoing-trainings', component: OngoingTrainingComponent },
  { path: 'home', component: HomeComponent },
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
