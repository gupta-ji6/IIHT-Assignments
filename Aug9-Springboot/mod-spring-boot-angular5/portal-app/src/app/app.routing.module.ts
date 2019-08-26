import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { AddUserComponent } from "./user/add-user.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/user/sign-up/sign-up.component";
import { UserLandingComponent } from "./components/user/user-landing/user-landing.component";
import { CompletedTrainingComponent } from "./components/user/completed-training/completed-training.component";
import { OngoingTrainingComponent } from "./components/user/current-training/ongoing-training.component";
import { UserPaymentsComponent } from "./components/user/user-payments/user-payments.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchTrainingsComponent } from "./components/user/search-trainings/search-trainings.component";
import { MentorLandingComponent } from "./components/mentor/mentor-landing/mentor-landing.component";
import { MentorCompletedTrainingsComponent } from "./components/mentor/mentor-completed-trainings/mentor-completed-trainings.component";
import { MentorCurrentTrainingsComponent } from "./components/mentor/mentor-current-trainings/mentor-current-trainings.component";
import { MentorEditSkillsComponent } from "./components/mentor/mentor-edit-skills/mentor-edit-skills.component";
import { MentorSignUpComponent } from "./components/mentor/mentor-sign-up/mentor-sign-up.component";
import { MentorProfileComponent } from "./components/mentor/mentor-profile/mentor-profile.component";
import { AdminEditTechComponent } from "./components/admin/admin-edit-tech/admin-edit-tech.component";
import { AdminUserListComponent } from "./components/admin/admin-user-list/admin-user-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "user/signup", component: SignUpComponent },
  { path: "mentor/signup", component: MentorSignUpComponent },
  { path: "home", component: HomeComponent },
  { path: "user", component: UserLandingComponent },
  { path: "search", component: SearchTrainingsComponent },
  { path: "user/completed-trainings", component: CompletedTrainingComponent },
  { path: "user/current-trainings", component: OngoingTrainingComponent },
  { path: "user/payments", component: UserPaymentsComponent },
  { path: "mentor", component: MentorLandingComponent },
  { path: "mentor/profile", component: MentorProfileComponent },
  { path: "mentor/completed-trainings", component: MentorCompletedTrainingsComponent },
  { path: "mentor/current-trainings", component: MentorCurrentTrainingsComponent },
  { path: "mentor/edit-skills", component: MentorEditSkillsComponent },
  { path: "admin/technologies", component: AdminEditTechComponent },
  { path: "admin/users", component: AdminUserListComponent },
  { path: "add", component: AddUserComponent },
  { path: "users", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
