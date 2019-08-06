import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  firstName: string = 'Student';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;
  col: number = 2;
  showDetails: boolean = false;

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
  constructor() { }

  ngOnInit() {
  }

}
