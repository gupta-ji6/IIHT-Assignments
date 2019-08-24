import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-trainings',
  templateUrl: './search-trainings.component.html',
  styleUrls: ['./search-trainings.component.css']
})
export class SearchTrainingsComponent implements OnInit {

  domains = [
    {value: 'Front End', viewValue: 'Front End'},
    {value: 'Back End', viewValue: 'Back End'},
    {value: 'Programming Language', viewValue: 'Programming Language'},
    {value: 'Library', viewValue: 'Library'},
    {value: 'Database', viewValue: 'Database'},
    {value: 'Mobile App', viewValue: 'Mobile App'},
    {value: 'Framework', viewValue: 'Framework'},
    {value: 'API', viewValue: 'API'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
