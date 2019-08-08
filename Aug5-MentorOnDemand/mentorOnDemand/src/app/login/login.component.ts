import { Component, OnInit, NgModule } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@NgModule({
  imports: [
    FormControl,
    Validators,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],
})

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'Email is required' :
        this.email.hasError('email') ? 'Enter a valid email' :
            '';
  }

  roles = [
    "Student",
    "Mentor",
    "Admin"
  ];

  hide = true;
}
