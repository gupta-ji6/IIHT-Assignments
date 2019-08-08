import { Component, NgModule } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [
    FormControl,
    Validators,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
})
export class AppComponent {
  title = 'mentorOnDemand';
}
