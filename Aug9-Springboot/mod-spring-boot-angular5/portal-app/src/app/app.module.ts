import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule, MatSidenavModule, MatListModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { AppRoutingModule } from "./app.routing.module";
import { UserService } from "./user/user.service";
import { HttpClientModule } from "@angular/common/http";
import { AddUserComponent } from "./user/add-user.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserLandingComponent } from "./user-landing/user-landing.component";
import { CompletedTrainingComponent } from "./completed-training/completed-training.component";
import { OngoingTrainingComponent } from "./ongoing-training/ongoing-training.component";
import {HomeComponent} from './home/home.component';
import {SearchTrainingsComponent} from './search-trainings/search-trainings.component'
import {MentorCompletedTrainingsComponent} from './mentor-completed-trainings/mentor-completed-trainings.component'
import {AdminEditTechComponent} from './admin-edit-tech/admin-edit-tech.component'
import {AdminUserListComponent} from './admin-user-list/admin-user-list.component';

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
    HomeComponent,
    SearchTrainingsComponent,
    MentorCompletedTrainingsComponent,
    AdminEditTechComponent,
    AdminUserListComponent
  ],
  imports: [LayoutModule, BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule, MatSidenavModule, MatListModule],
  providers: [UserService, ],
  bootstrap: [AppComponent]
})
export class AppModule {}
