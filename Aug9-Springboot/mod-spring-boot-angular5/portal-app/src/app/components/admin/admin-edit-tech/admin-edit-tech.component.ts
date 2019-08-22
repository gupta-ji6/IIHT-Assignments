import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-edit-tech',
  templateUrl: './admin-edit-tech.component.html',
  styleUrls: ['./admin-edit-tech.component.css']
})
export class AdminEditTechComponent implements OnInit {

  technologies = [
    {
      name: "Angular",
      domain: "Front-End",
      img: "https://cdn.svgporn.com/logos/angular-icon.svg",
      description: "Angular is a platform for building mobile and desktop web applications.",
      fee: 2999,
    },
    {
      name: "Amazon AWS",
      domain: "Back-end",
      img: "https://cdn.svgporn.com/logos/aws.svg",
      description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
      fee: 1499,
    },
    {
      name: "Bootstrap",
      domain: "CSS Framework",
      img: "https://cdn.svgporn.com/logos/bootstrap.svg",
      description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
      fee: 2449,
    },
    {
      name: "Node JS",
      domain: "Back-end",
      img: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
      description: "Node.js is an open-source, cross-platform JavaScript run-time environment.",
      fee: 4299,
    },
    {
      name: "React",
      domain: "Front-End",
      img: "https://cdn.svgporn.com/logos/react.svg",
      description: "React is a JavaScript library for building user interfaces.",
      fee: 3499,
    },
    {
      name: "Flutter",
      domain: "Mobile App",
      img: "https://cdn.svgporn.com/logos/flutter.svg",
      description: "Flutter is an open-source mobile application development framework created by Google.",
      fee: 1599,
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

  constructor() { }

  ngOnInit() {
  }

}
