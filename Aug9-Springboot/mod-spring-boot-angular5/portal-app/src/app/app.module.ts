import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import {
  MatButtonModule,
  MatDatepickerModule,
  MatSliderModule,
  MatChipsModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatSortModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { AppRoutingModule } from "./app.routing.module";
import { UserService } from "./user/user.service";
import { HttpClientModule } from "@angular/common/http";
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
import { MentorCurrentTrainingsComponent } from "./components/mentor/mentor-current-trainings/mentor-current-trainings.component";
import { MentorCompletedTrainingsComponent } from "./components/mentor/mentor-completed-trainings/mentor-completed-trainings.component";
import { MentorEditSkillsComponent } from "./components/mentor/mentor-edit-skills/mentor-edit-skills.component";
import { MentorSignUpComponent } from "./components/mentor/mentor-sign-up/mentor-sign-up.component";
import { MentorProfileComponent } from "./components/mentor/mentor-profile/mentor-profile.component";
import { AdminEditTechComponent } from "./components/admin/admin-edit-tech/admin-edit-tech.component";
import { AdminUserListComponent } from "./components/admin/admin-user-list/admin-user-list.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    LoginComponent,
    SignUpComponent,
    UserLandingComponent,
    CompletedTrainingComponent,
    OngoingTrainingComponent,
    UserPaymentsComponent,
    HomeComponent,
    SearchTrainingsComponent,
    MentorLandingComponent,
    MentorSignUpComponent,
    MentorProfileComponent,
    MentorCurrentTrainingsComponent,
    MentorCompletedTrainingsComponent,
    MentorEditSkillsComponent,
    AdminEditTechComponent,
    AdminUserListComponent
  ],
  imports: [
    LayoutModule,
    MatDatepickerModule,
    MatSliderModule,
    MatChipsModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
