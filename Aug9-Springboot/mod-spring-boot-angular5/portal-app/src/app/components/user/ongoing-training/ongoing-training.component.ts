import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-ongoing-training",
  templateUrl: "./ongoing-training.component.html",
  styleUrls: ["./ongoing-training.component.css"]
})
export class OngoingTrainingComponent implements OnInit {
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
    'updateProgress'
  ];
  dataSource = new MatTableDataSource(USER_CURRENT_DATA);

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

  constructor() {}

  ngOnInit() {}
}

export interface UserCurrent {
  sno: number;
  trainingId: number;
  domain: string;
  progress: number;
  status: string;
  startDate: string;
  duration: number;
  trainer: string;
  price: number;
  updateProgress: string;
}

const USER_CURRENT_DATA: UserCurrent[] = [
  {
    "sno": 1,
    "trainingId": 65165,
    "domain": "Research and Development",
    "progress": 23,
    "status": "Ongoing",
    "startDate": "22/02/2019",
    "duration": 16,
    "trainer": "Zachary Pankethman",
    "price": 7749,
    "updateProgress": "Update"
  },
  {
    "sno": 2,
    "trainingId": 65164,
    "domain": "Accounting",
    "progress": 0,
    "status": "Proposed",
    "startDate": "31/03/2019",
    "duration": 37,
    "trainer": "Blinny Renfree",
    "price": 7316,
    "updateProgress": "Update"
  },
  {
    "sno": 3,
    "trainingId": 65175,
    "domain": "Support",
    "progress": 11,
    "status": "Ongoing",
    "startDate": "30/06/2019",
    "duration": 67,
    "trainer": "Vite Cowx",
    "price": 7794,
    "updateProgress": "Update"
  },
  {
    "sno": 4,
    "trainingId": 65178,
    "domain": "Legal",
    "progress": 100,
    "status": "Completed",
    "startDate": "29/05/2019",
    "duration": 20,
    "trainer": "Fields Matuska",
    "price": 9747,
    "updateProgress": "Update"
  },
  {
    "sno": 5,
    "trainingId": 65177,
    "domain": "Business Development",
    "progress": 51,
    "status": "Ongoing",
    "startDate": "25/03/2019",
    "duration": 29,
    "trainer": "Cordie Cranney",
    "price": 5674,
    "updateProgress": "Update"
  },
  {
    "sno": 6,
    "trainingId": 65171,
    "domain": "Research and Development",
    "progress": 15,
    "status": "Ongoing",
    "startDate": "03/01/2019",
    "duration": 63,
    "trainer": "Townsend Seydlitz",
    "price": 3638,
    "updateProgress": "Update"
  },
  {
    "sno": 7,
    "trainingId": 65179,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "21/02/2019",
    "duration": 68,
    "trainer": "Kimmy Virr",
    "price": 9192,
    "updateProgress": "Update"
  },
  {
    "sno": 8,
    "trainingId": 65176,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "14/02/2019",
    "duration": 84,
    "trainer": "Robbi Tuttiett",
    "price": 5185,
    "updateProgress": "Update"
  },
  {
    "sno": 9,
    "trainingId": 65176,
    "domain": "Marketing",
    "progress": 0,
    "status": "Proposed",
    "startDate": "07/01/2019",
    "duration": 59,
    "trainer": "Kaitlin Ivett",
    "price": 3104,
    "updateProgress": "Update"
  },
  {
    "sno": 10,
    "trainingId": 65169,
    "domain": "Product Management",
    "progress": 38,
    "status": "Ongoing",
    "startDate": "14/07/2019",
    "duration": 89,
    "trainer": "Elisha Peplay",
    "price": 9634,
    "updateProgress": "Update"
  },
  {
    "sno": 11,
    "trainingId": 65173,
    "domain": "Support",
    "progress": 0,
    "status": "Proposed",
    "startDate": "20/07/2019",
    "duration": 66,
    "trainer": "Nollie Ladlow",
    "price": 7537,
    "updateProgress": "Update"
  },
  {
    "sno": 12,
    "trainingId": 65177,
    "domain": "Services",
    "progress": 0,
    "status": "Proposed",
    "startDate": "13/05/2019",
    "duration": 18,
    "trainer": "Lily Catlin",
    "price": 9832,
    "updateProgress": "Update"
  },
  {
    "sno": 13,
    "trainingId": 65189,
    "domain": "Engineering",
    "progress": 100,
    "status": "Completed",
    "startDate": "14/04/2019",
    "duration": 64,
    "trainer": "Darcy Janoschek",
    "price": 9036,
    "updateProgress": "Update"
  },
  {
    "sno": 14,
    "trainingId": 65166,
    "domain": "Training",
    "progress": 0,
    "status": "Proposed",
    "startDate": "06/06/2019",
    "duration": 10,
    "trainer": "Melvin Blazek",
    "price": 2831,
    "updateProgress": "Update"
  },
  {
    "sno": 15,
    "trainingId": 65172,
    "domain": "Legal",
    "progress": 24,
    "status": "Ongoing",
    "startDate": "16/07/2019",
    "duration": 19,
    "trainer": "Sergeant Kynett",
    "price": 7505,
    "updateProgress": "Update"
  },
  {
    "sno": 16,
    "trainingId": 65159,
    "domain": "Engineering",
    "progress": 0,
    "status": "Proposed",
    "startDate": "14/06/2019",
    "duration": 21,
    "trainer": "Natty Reilly",
    "price": 1623,
    "updateProgress": "Update"
  },
  {
    "sno": 17,
    "trainingId": 65187,
    "domain": "Marketing",
    "progress": 0,
    "status": "Proposed",
    "startDate": "26/06/2019",
    "duration": 55,
    "trainer": "Rodge Speirs",
    "price": 2174,
    "updateProgress": "Update"
  },
  {
    "sno": 18,
    "trainingId": 65183,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "07/03/2019",
    "duration": 48,
    "trainer": "Sherwin Cristofvao",
    "price": 8642,
    "updateProgress": "Update"
  },
  {
    "sno": 19,
    "trainingId": 65182,
    "domain": "Legal",
    "progress": 0,
    "status": "Proposed",
    "startDate": "21/07/2019",
    "duration": 15,
    "trainer": "Christophorus Borthe",
    "price": 7030,
    "updateProgress": "Update"
  },
  {
    "sno": 20,
    "trainingId": 65187,
    "domain": "Human Resources",
    "progress": 23,
    "status": "Ongoing",
    "startDate": "11/08/2019",
    "duration": 30,
    "trainer": "Sandie Barbrick",
    "price": 8332,
    "updateProgress": "Update"
  },
  {
    "sno": 21,
    "trainingId": 65169,
    "domain": "Research and Development",
    "progress": 53,
    "status": "Ongoing",
    "startDate": "09/07/2019",
    "duration": 39,
    "trainer": "Jana Brogioni",
    "price": 7995,
    "updateProgress": "Update"
  },
  {
    "sno": 22,
    "trainingId": 65160,
    "domain": "Legal",
    "progress": 0,
    "status": "Proposed",
    "startDate": "02/01/2019",
    "duration": 45,
    "trainer": "Shani Goves",
    "price": 3878,
    "updateProgress": "Update"
  },
  {
    "sno": 23,
    "trainingId": 65160,
    "domain": "Engineering",
    "progress": 0,
    "status": "Proposed",
    "startDate": "06/08/2019",
    "duration": 44,
    "trainer": "Griffith Asaaf",
    "price": 1596,
    "updateProgress": "Update"
  },
  {
    "sno": 24,
    "trainingId": 65184,
    "domain": "Research and Development",
    "progress": 78,
    "status": "Ongoing",
    "startDate": "19/08/2019",
    "duration": 42,
    "trainer": "Kurtis O'Shevlan",
    "price": 7295,
    "updateProgress": "Update"
  },
  {
    "sno": 25,
    "trainingId": 65164,
    "domain": "Support",
    "progress": 59,
    "status": "Ongoing",
    "startDate": "08/02/2019",
    "duration": 83,
    "trainer": "Feodor Faich",
    "price": 8531,
    "updateProgress": "Update"
  },
  {
    "sno": 26,
    "trainingId": 65183,
    "domain": "Services",
    "progress": 0,
    "status": "Proposed",
    "startDate": "14/04/2019",
    "duration": 54,
    "trainer": "Cecil Barfoot",
    "price": 1751,
    "updateProgress": "Update"
  },
  {
    "sno": 27,
    "trainingId": 65182,
    "domain": "Training",
    "progress": 70,
    "status": "Ongoing",
    "startDate": "29/03/2019",
    "duration": 73,
    "trainer": "Barrett Brognot",
    "price": 5053,
    "updateProgress": "Update"
  },
  {
    "sno": 28,
    "trainingId": 65189,
    "domain": "Research and Development",
    "progress": 43,
    "status": "Ongoing",
    "startDate": "19/02/2019",
    "duration": 35,
    "trainer": "Arley Glenny",
    "price": 3830,
    "updateProgress": "Update"
  },
  {
    "sno": 29,
    "trainingId": 65169,
    "domain": "Human Resources",
    "progress": 28,
    "status": "Ongoing",
    "startDate": "18/02/2019",
    "duration": 28,
    "trainer": "Elisha Fellis",
    "price": 3125,
    "updateProgress": "Update"
  },
  {
    "sno": 30,
    "trainingId": 65166,
    "domain": "Research and Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "19/02/2019",
    "duration": 18,
    "trainer": "Marcelle Aggiss",
    "price": 8286,
    "updateProgress": "Update"
  },
  {
    "sno": 31,
    "trainingId": 65173,
    "domain": "Human Resources",
    "progress": 0,
    "status": "Proposed",
    "startDate": "22/05/2019",
    "duration": 81,
    "trainer": "Aline Esparza",
    "price": 5380,
    "updateProgress": "Update"
  },
  {
    "sno": 32,
    "trainingId": 65173,
    "domain": "Training",
    "progress": 0,
    "status": "Proposed",
    "startDate": "16/05/2019",
    "duration": 43,
    "trainer": "Sileas Dalbey",
    "price": 8907,
    "updateProgress": "Update"
  },
  {
    "sno": 33,
    "trainingId": 65184,
    "domain": "Product Management",
    "progress": 8,
    "status": "Ongoing",
    "startDate": "02/08/2019",
    "duration": 40,
    "trainer": "Hortensia Bartrap",
    "price": 2231,
    "updateProgress": "Update"
  },
  {
    "sno": 34,
    "trainingId": 65174,
    "domain": "Human Resources",
    "progress": 49,
    "status": "Ongoing",
    "startDate": "01/03/2019",
    "duration": 18,
    "trainer": "Etta Isacsson",
    "price": 4709,
    "updateProgress": "Update"
  },
  {
    "sno": 35,
    "trainingId": 65176,
    "domain": "Human Resources",
    "progress": 0,
    "status": "Proposed",
    "startDate": "03/03/2019",
    "duration": 75,
    "trainer": "Lanny Firman",
    "price": 1864,
    "updateProgress": "Update"
  },
  {
    "sno": 36,
    "trainingId": 65176,
    "domain": "Marketing",
    "progress": 0,
    "status": "Proposed",
    "startDate": "20/04/2019",
    "duration": 68,
    "trainer": "Hubert Shore",
    "price": 4656,
    "updateProgress": "Update"
  },
  {
    "sno": 37,
    "trainingId": 65183,
    "domain": "Human Resources",
    "progress": 94,
    "status": "Ongoing",
    "startDate": "02/06/2019",
    "duration": 78,
    "trainer": "Jannelle Kilian",
    "price": 1095,
    "updateProgress": "Update"
  },
  {
    "sno": 38,
    "trainingId": 65183,
    "domain": "Sales",
    "progress": 0,
    "status": "Proposed",
    "startDate": "02/02/2019",
    "duration": 70,
    "trainer": "Yulma D'eath",
    "price": 3920,
    "updateProgress": "Update"
  },
  {
    "sno": 39,
    "trainingId": 65171,
    "domain": "Research and Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "05/05/2019",
    "duration": 22,
    "trainer": "Theodora Allawy",
    "price": 2786,
    "updateProgress": "Update"
  },
  {
    "sno": 40,
    "trainingId": 65180,
    "domain": "Research and Development",
    "progress": 34,
    "status": "Ongoing",
    "startDate": "22/07/2019",
    "duration": 74,
    "trainer": "Yovonnda Kennifeck",
    "price": 9972,
    "updateProgress": "Update"
  },
  {
    "sno": 41,
    "trainingId": 65183,
    "domain": "Engineering",
    "progress": 0,
    "status": "Proposed",
    "startDate": "01/05/2019",
    "duration": 22,
    "trainer": "Gay Cawthery",
    "price": 4473,
    "updateProgress": "Update"
  },
  {
    "sno": 42,
    "trainingId": 65165,
    "domain": "Human Resources",
    "progress": 0,
    "status": "Proposed",
    "startDate": "06/08/2019",
    "duration": 72,
    "trainer": "Benetta Obin",
    "price": 5658,
    "updateProgress": "Update"
  },
  {
    "sno": 43,
    "trainingId": 65182,
    "domain": "Business Development",
    "progress": 67,
    "status": "laser",
    "startDate": "16/04/2019",
    "duration": 72,
    "trainer": "Blondie Seago",
    "price": 6790,
    "updateProgress": "Update"
  },
  {
    "sno": 44,
    "trainingId": 65180,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "06/01/2019",
    "duration": 72,
    "trainer": "Golda Crim",
    "price": 7319,
    "updateProgress": "Update"
  },
  {
    "sno": 45,
    "trainingId": 65187,
    "domain": "Business Development",
    "progress": 100,
    "status": "Completed",
    "startDate": "09/03/2019",
    "duration": 25,
    "trainer": "Harley Flips",
    "price": 6438,
    "updateProgress": "Update"
  },
  {
    "sno": 46,
    "trainingId": 65167,
    "domain": "Sales",
    "progress": 0,
    "status": "Proposed",
    "startDate": "24/07/2019",
    "duration": 60,
    "trainer": "Anestassia Loukes",
    "price": 1166,
    "updateProgress": "Update"
  },
  {
    "sno": 47,
    "trainingId": 65167,
    "domain": "Business Development",
    "progress": 0,
    "status": "Proposed",
    "startDate": "18/04/2019",
    "duration": 85,
    "trainer": "Luci Dysert",
    "price": 4137,
    "updateProgress": "Update"
  },
  {
    "sno": 48,
    "trainingId": 65160,
    "domain": "Human Resources",
    "progress": 0,
    "status": "Proposed",
    "startDate": "27/03/2019",
    "duration": 47,
    "trainer": "Dianemarie Chinery",
    "price": 3388,
    "updateProgress": "Update"
  },
  {
    "sno": 49,
    "trainingId": 65177,
    "domain": "Marketing",
    "progress": 32,
    "status": "Ongoing",
    "startDate": "29/04/2019",
    "duration": 35,
    "trainer": "Cloe Drinkhill",
    "price": 5217,
    "updateProgress": "Update"
  },
  {
    "sno": 50,
    "trainingId": 65188,
    "domain": "Engineering",
    "progress": 31,
    "status": "Ongoing",
    "startDate": "17/05/2019",
    "duration": 73,
    "trainer": "Donnamarie Dallewater",
    "price": 9702,
    "updateProgress": "Update"
  }
];
