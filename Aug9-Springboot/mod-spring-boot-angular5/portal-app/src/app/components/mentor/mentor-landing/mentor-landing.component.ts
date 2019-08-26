import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-landing',
  templateUrl: './mentor-landing.component.html',
  styleUrls: ['./mentor-landing.component.css']
})
export class MentorLandingComponent implements OnInit {

  trainingProposals = [
    {
      "name" : "Jose Simpson",
      "profilePic": "https://pbs.twimg.com/profile_images/516590507808419840/V40yR78I.jpeg",
      "domain": "React",
      "date": "23-07-2019",
      "price": 1299,
    },
    {
      "name" : "Alicia Fox",
      "profilePic": "https://pbs.twimg.com/profile_images/952318165941477376/e-3MyGW3.jpg",
      "domain": "Tensorflow",
      "date": "12-07-2019",
      "price": 2999,
    },
    {
      "name" : "Brian Hemsworth",
      "profilePic": "https://pbs.twimg.com/profile_images/1079706442763067392/wuaeGZnN.jpg",
      "domain": "Netlify",
      "date": "03-09-2019",
      "price": 999,
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
