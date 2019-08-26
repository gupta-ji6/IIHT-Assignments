import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: 'app-mentor-current-trainings',
  templateUrl: './mentor-current-trainings.component.html',
  styleUrls: ['./mentor-current-trainings.component.css']
})
export class MentorCurrentTrainingsComponent implements OnInit {

  displayedColumns = [
    'sno',
    'trainingId',
    'domain',
    'progress',
    'status',
    'startDate',
    'duration',
    'trainer',
    'price',
    'requestPayment'
  ];
  dataSource = new MatTableDataSource(MENTOR_CURRENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  constructor() { }

  ngOnInit() {
  }

}

export interface MentorCurrent {
  sno: number;
  trainingId: number;
  domain: string;
  progress: number;
  status: string;
  startDate: string;
  duration: number;
  trainer: string;
  price: number;
  requestPayment: string;
}

const MENTOR_CURRENT_DATA: MentorCurrent[] = [
  {
    "sno": 1,
    "trainingId": 65165,
    "domain": "Research and Development",
    "progress": 23,
    "status": "Ongoing",
    "startDate": "22/02/2019",
    "duration": 16,
    "trainer": "Wes Bos",
    "price": 7749,
    "requestPayment": "Request"
  },
  {
    "sno": 2,
    "trainingId": 65164,
    "domain": "Accounting",
    "progress": 0,
    "status": "Proposed",
    "startDate": "31/03/2019",
    "duration": 37,
    "trainer": "Wes Bos",
    "price": 7316,
    "requestPayment": "Request"
  },
  {
    "sno": 3,
    "trainingId": 65175,
    "domain": "Support",
    "progress": 11,
    "status": "Ongoing",
    "startDate": "30/06/2019",
    "duration": 67,
    "trainer": "Wes Bos",
    "price": 7794,
    "requestPayment": "Request"
  },
  {
    "sno": 4,
    "trainingId": 65178,
    "domain": "Legal",
    "progress": 100,
    "status": "Completed",
    "startDate": "29/05/2019",
    "duration": 20,
    "trainer": "Wes Bos",
    "price": 9747,
    "requestPayment": "Request"
  },
  {
    "sno": 5,
    "trainingId": 65177,
    "domain": "Business Development",
    "progress": 51,
    "status": "Ongoing",
    "startDate": "25/03/2019",
    "duration": 29,
    "trainer": "Wes Bos",
    "price": 5674,
    "requestPayment": "Request"
  },
  {
    "sno": 6,
    "trainingId": 65171,
    "domain": "Research and Development",
    "progress": 15,
    "status": "Ongoing",
    "startDate": "03/01/2019",
    "duration": 63,
    "trainer": "Wes Bos",
    "price": 3638,
    "requestPayment": "Request"
  },
  {
    "sno": 7,
    "trainingId": 65179,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "21/02/2019",
    "duration": 68,
    "trainer": "Wes Bos",
    "price": 9192,
    "requestPayment": "Request"
  },
  {
    "sno": 8,
    "trainingId": 65176,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "14/02/2019",
    "duration": 84,
    "trainer": "Wes Bos",
    "price": 5185,
    "requestPayment": "Request"
  },
  {
    "sno": 9,
    "trainingId": 65176,
    "domain": "Marketing",
    "progress": 0,
    "status": "Proposed",
    "startDate": "07/01/2019",
    "duration": 59,
    "trainer": "Wes Bos",
    "price": 3104,
    "requestPayment": "Request"
  },
  {
    "sno": 10,
    "trainingId": 65169,
    "domain": "Product Management",
    "progress": 38,
    "status": "Ongoing",
    "startDate": "14/07/2019",
    "duration": 89,
    "trainer": "Wes Bos",
    "price": 9634,
    "requestPayment": "Request"
  },
  {
    "sno": 11,
    "trainingId": 65173,
    "domain": "Support",
    "progress": 0,
    "status": "Proposed",
    "startDate": "20/07/2019",
    "duration": 66,
    "trainer": "Wes Bos",
    "price": 7537,
    "requestPayment": "Request"
  },
  {
    "sno": 12,
    "trainingId": 65177,
    "domain": "Services",
    "progress": 0,
    "status": "Proposed",
    "startDate": "13/05/2019",
    "duration": 18,
    "trainer": "Wes Bos",
    "price": 9832,
    "requestPayment": "Request"
  },
  {
    "sno": 13,
    "trainingId": 65189,
    "domain": "Engineering",
    "progress": 100,
    "status": "Completed",
    "startDate": "14/04/2019",
    "duration": 64,
    "trainer": "Wes Bos",
    "price": 9036,
    "requestPayment": "Request"
  },
  {
    "sno": 14,
    "trainingId": 65166,
    "domain": "Training",
    "progress": 0,
    "status": "Proposed",
    "startDate": "06/06/2019",
    "duration": 10,
    "trainer": "Wes Bos",
    "price": 2831,
    "requestPayment": "Request"
  },
  {
    "sno": 15,
    "trainingId": 65172,
    "domain": "Legal",
    "progress": 24,
    "status": "Ongoing",
    "startDate": "16/07/2019",
    "duration": 19,
    "trainer": "Wes Bos",
    "price": 7505,
    "requestPayment": "Request"
  },
  {
    "sno": 16,
    "trainingId": 65159,
    "domain": "Engineering",
    "progress": 0,
    "status": "Proposed",
    "startDate": "14/06/2019",
    "duration": 21,
    "trainer": "Wes Bos",
    "price": 1623,
    "requestPayment": "Request"
  },
  {
    "sno": 17,
    "trainingId": 65187,
    "domain": "Marketing",
    "progress": 0,
    "status": "Proposed",
    "startDate": "26/06/2019",
    "duration": 55,
    "trainer": "Wes Bos",
    "price": 2174,
    "requestPayment": "Request"
  },
  {
    "sno": 18,
    "trainingId": 65183,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "07/03/2019",
    "duration": 48,
    "trainer": "Wes Bos",
    "price": 8642,
    "requestPayment": "Request"
  },
  {
    "sno": 19,
    "trainingId": 65182,
    "domain": "Legal",
    "progress": 0,
    "status": "Proposed",
    "startDate": "21/07/2019",
    "duration": 15,
    "trainer": "Wes Bos",
    "price": 7030,
    "requestPayment": "Request"
  },
  {
    "sno": 20,
    "trainingId": 65187,
    "domain": "Human Resources",
    "progress": 23,
    "status": "Ongoing",
    "startDate": "11/08/2019",
    "duration": 30,
    "trainer": "Wes Bos",
    "price": 8332,
    "requestPayment": "Request"
  },
  {
    "sno": 21,
    "trainingId": 65169,
    "domain": "Research and Development",
    "progress": 53,
    "status": "Ongoing",
    "startDate": "09/07/2019",
    "duration": 39,
    "trainer": "Wes Bos",
    "price": 7995,
    "requestPayment": "Request"
  },
  {
    "sno": 22,
    "trainingId": 65160,
    "domain": "Legal",
    "progress": 0,
    "status": "Proposed",
    "startDate": "02/01/2019",
    "duration": 45,
    "trainer": "Wes Bos",
    "price": 3878,
    "requestPayment": "Request"
  },
  {
    "sno": 23,
    "trainingId": 65160,
    "domain": "Engineering",
    "progress": 0,
    "status": "Proposed",
    "startDate": "06/08/2019",
    "duration": 44,
    "trainer": "Wes Bos",
    "price": 1596,
    "requestPayment": "Request"
  },
  {
    "sno": 24,
    "trainingId": 65184,
    "domain": "Research and Development",
    "progress": 78,
    "status": "Ongoing",
    "startDate": "19/08/2019",
    "duration": 42,
    "trainer": "Wes Bos",
    "price": 7295,
    "requestPayment": "Request"
  },
  {
    "sno": 25,
    "trainingId": 65164,
    "domain": "Support",
    "progress": 59,
    "status": "Ongoing",
    "startDate": "08/02/2019",
    "duration": 83,
    "trainer": "Wes Bos",
    "price": 8531,
    "requestPayment": "Request"
  },
  {
    "sno": 26,
    "trainingId": 65183,
    "domain": "Services",
    "progress": 0,
    "status": "Proposed",
    "startDate": "14/04/2019",
    "duration": 54,
    "trainer": "Wes Bos",
    "price": 1751,
    "requestPayment": "Request"
  },
  {
    "sno": 27,
    "trainingId": 65182,
    "domain": "Training",
    "progress": 70,
    "status": "Ongoing",
    "startDate": "29/03/2019",
    "duration": 73,
    "trainer": "Wes Bos",
    "price": 5053,
    "requestPayment": "Request"
  },
  {
    "sno": 28,
    "trainingId": 65189,
    "domain": "Research and Development",
    "progress": 43,
    "status": "Ongoing",
    "startDate": "19/02/2019",
    "duration": 35,
    "trainer": "Wes Bos",
    "price": 3830,
    "requestPayment": "Request"
  },
  {
    "sno": 29,
    "trainingId": 65169,
    "domain": "Human Resources",
    "progress": 28,
    "status": "Ongoing",
    "startDate": "18/02/2019",
    "duration": 28,
    "trainer": "Wes Bos",
    "price": 3125,
    "requestPayment": "Request"
  },
  {
    "sno": 30,
    "trainingId": 65166,
    "domain": "Research and Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "19/02/2019",
    "duration": 18,
    "trainer": "Wes Bos",
    "price": 8286,
    "requestPayment": "Request"
  },
  {
    "sno": 31,
    "trainingId": 65173,
    "domain": "Human Resources",
    "progress": 0,
    "status": "Proposed",
    "startDate": "22/05/2019",
    "duration": 81,
    "trainer": "Wes Bos",
    "price": 5380,
    "requestPayment": "Request"
  },
  {
    "sno": 32,
    "trainingId": 65173,
    "domain": "Training",
    "progress": 0,
    "status": "Proposed",
    "startDate": "16/05/2019",
    "duration": 43,
    "trainer": "Wes Bos",
    "price": 8907,
    "requestPayment": "Request"
  },
  {
    "sno": 33,
    "trainingId": 65184,
    "domain": "Product Management",
    "progress": 8,
    "status": "Ongoing",
    "startDate": "02/08/2019",
    "duration": 40,
    "trainer": "Wes Bos",
    "price": 2231,
    "requestPayment": "Request"
  },
  {
    "sno": 34,
    "trainingId": 65174,
    "domain": "Human Resources",
    "progress": 49,
    "status": "Ongoing",
    "startDate": "01/03/2019",
    "duration": 18,
    "trainer": "Wes Bos",
    "price": 4709,
    "requestPayment": "Request"
  },
  {
    "sno": 35,
    "trainingId": 65176,
    "domain": "Human Resources",
    "progress": 0,
    "status": "Proposed",
    "startDate": "03/03/2019",
    "duration": 75,
    "trainer": "Wes Bos",
    "price": 1864,
    "requestPayment": "Request"
  },
  {
    "sno": 36,
    "trainingId": 65176,
    "domain": "Marketing",
    "progress": 0,
    "status": "Proposed",
    "startDate": "20/04/2019",
    "duration": 68,
    "trainer": "Wes Bos",
    "price": 4656,
    "requestPayment": "Request"
  },
  {
    "sno": 37,
    "trainingId": 65183,
    "domain": "Human Resources",
    "progress": 94,
    "status": "Ongoing",
    "startDate": "02/06/2019",
    "duration": 78,
    "trainer": "Wes Bos",
    "price": 1095,
    "requestPayment": "Request"
  },
  {
    "sno": 38,
    "trainingId": 65183,
    "domain": "Sales",
    "progress": 0,
    "status": "Proposed",
    "startDate": "02/02/2019",
    "duration": 70,
    "trainer": "Wes Bos",
    "price": 3920,
    "requestPayment": "Request"
  },
  {
    "sno": 39,
    "trainingId": 65171,
    "domain": "Research and Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "05/05/2019",
    "duration": 22,
    "trainer": "Wes Bos",
    "price": 2786,
    "requestPayment": "Request"
  },
  {
    "sno": 40,
    "trainingId": 65180,
    "domain": "Research and Development",
    "progress": 34,
    "status": "Ongoing",
    "startDate": "22/07/2019",
    "duration": 74,
    "trainer": "Wes Bos",
    "price": 9972,
    "requestPayment": "Request"
  },
  {
    "sno": 41,
    "trainingId": 65183,
    "domain": "Engineering",
    "progress": 0,
    "status": "Proposed",
    "startDate": "01/05/2019",
    "duration": 22,
    "trainer": "Wes Bos",
    "price": 4473,
    "requestPayment": "Request"
  },
  {
    "sno": 42,
    "trainingId": 65165,
    "domain": "Human Resources",
    "progress": 0,
    "status": "Proposed",
    "startDate": "06/08/2019",
    "duration": 72,
    "trainer": "Wes Bos",
    "price": 5658,
    "requestPayment": "Request"
  },
  {
    "sno": 43,
    "trainingId": 65182,
    "domain": "Business Development",
    "progress": 67,
    "status": "laser",
    "startDate": "16/04/2019",
    "duration": 72,
    "trainer": "Wes Bos",
    "price": 6790,
    "requestPayment": "Request"
  },
  {
    "sno": 44,
    "trainingId": 65180,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "06/01/2019",
    "duration": 72,
    "trainer": "Wes Bos",
    "price": 7319,
    "requestPayment": "Request"
  },
  {
    "sno": 45,
    "trainingId": 65187,
    "domain": "Business Development",
    "progress": 100,
    "status": "Completed",
    "startDate": "09/03/2019",
    "duration": 25,
    "trainer": "Wes Bos",
    "price": 6438,
    "requestPayment": "Request"
  },
  {
    "sno": 46,
    "trainingId": 65167,
    "domain": "Sales",
    "progress": 0,
    "status": "Proposed",
    "startDate": "24/07/2019",
    "duration": 60,
    "trainer": "Wes Bos",
    "price": 1166,
    "requestPayment": "Request"
  },
  {
    "sno": 47,
    "trainingId": 65167,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "18/04/2019",
    "duration": 85,
    "trainer": "Wes Bos",
    "price": 4137,
    "requestPayment": "Request"
  },
  {
    "sno": 48,
    "trainingId": 65160,
    "domain": "Human Resources",
    "progress": 0,
    "status": "Proposed",
    "startDate": "27/03/2019",
    "duration": 47,
    "trainer": "Wes Bos",
    "price": 3388,
    "requestPayment": "Request"
  },
  {
    "sno": 49,
    "trainingId": 65177,
    "domain": "Marketing",
    "progress": 32,
    "status": "Ongoing",
    "startDate": "29/04/2019",
    "duration": 35,
    "trainer": "Wes Bos",
    "price": 5217,
    "requestPayment": "Request"
  },
  {
    "sno": 50,
    "trainingId": 65188,
    "domain": "Engineering",
    "progress": 31,
    "status": "Ongoing",
    "startDate": "17/05/2019",
    "duration": 73,
    "trainer": "Wes Bos",
    "price": 9702,
    "requestPayment": "Request"
  }
];
