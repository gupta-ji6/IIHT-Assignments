import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-edit-skills',
  templateUrl: './mentor-edit-skills.component.html',
  styleUrls: ['./mentor-edit-skills.component.css']
})
export class MentorEditSkillsComponent implements OnInit {

  skills = [
    {
      "name": "React",
      "logo": "https://cdn.svgporn.com/logos/react.svg",
      "domain": "Front End",
      "proficiency" : "Expert",
      "numOfTrainings": 32
    },
    {
      "name": "Tensorflow",
      "logo": "https://cdn.svgporn.com/logos/tensorflow.svg",
      "domain": "Machine Learning",
      "proficiency" : "Expert",
      "numOfTrainings": 49
    },
    {
      "name": "Netlify",
      "logo": "https://cdn.svgporn.com/logos/netlify.svg",
      "domain": "Hosting",
      "proficiency" : "Expert",
      "numOfTrainings": 15
    }
  ];

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

  proficiency = [
    {
      value: 'Expert',
      viewValue: 'Expert'
    },
    {
      value: 'Intermediate',
      viewValue: 'Intermediate'
    },
    {
      value: 'Amateur',
      viewValue: 'Amateur'
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
