import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";

@Component({
  selector: "app-completed-training",
  templateUrl: "./completed-training.component.html",
  styleUrls: ["./completed-training.component.css"]
})
export class CompletedTrainingComponent implements OnInit {
  displayedColumns = [
    "sno",
    "trainingId",
    "domain",
    "price",
    "startDate",
    "duration",
    "trainer",
    "rating"
  ];
  dataSource = new MatTableDataSource(USER_COMPLETED_DATA);

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

export interface UserCompleted {
  sno: number;
  trainingId: number;
  domain: string;
  price: number;
  startDate: string;
  duration: number;
  trainer: string;
  rating: number;
}

const USER_COMPLETED_DATA: UserCompleted[] = [
  {
    sno: 1,
    trainingId: 65165,
    domain: "Legal",
    startDate: "22/04/2019",
    duration: 61,
    trainer: "Jillian Gouldthorp",
    price: 2046,
    rating: 2.2
  },
  {
    sno: 2,
    trainingId: 65161,
    domain: "Services",
    startDate: "27/07/2019",
    duration: 89,
    trainer: "Oriana Vince",
    price: 2707,
    rating: 3.4
  },
  {
    sno: 3,
    trainingId: 65179,
    domain: "Services",
    startDate: "28/06/2019",
    duration: 44,
    trainer: "Anselma Joynes",
    price: 3553,
    rating: 4.5
  },
  {
    sno: 4,
    trainingId: 65172,
    domain: "Sales",
    startDate: "21/08/2019",
    duration: 28,
    trainer: "Merrilee Mamwell",
    price: 4055,
    rating: 2.2
  },
  {
    sno: 5,
    trainingId: 65166,
    domain: "Marketing",
    startDate: "02/01/2019",
    duration: 77,
    trainer: "Micheal Clynmans",
    price: 2919,
    rating: 4.7
  },
  {
    sno: 6,
    trainingId: 65177,
    domain: "Marketing",
    startDate: "04/05/2019",
    duration: 55,
    trainer: "Emory Toulmin",
    price: 3121,
    rating: 4.8
  },
  {
    sno: 7,
    trainingId: 65171,
    domain: "Services",
    startDate: "20/08/2019",
    duration: 49,
    trainer: "Sumner Weatherburn",
    price: 3849,
    rating: 4.6
  },
  {
    sno: 8,
    trainingId: 65188,
    domain: "Services",
    startDate: "14/08/2019",
    duration: 47,
    trainer: "Colan Gyford",
    price: 9372,
    rating: 2.0
  },
  {
    sno: 9,
    trainingId: 65161,
    domain: "Services",
    startDate: "04/07/2019",
    duration: 69,
    trainer: "Ardenia Partridge",
    price: 7359,
    rating: 2.0
  },
  {
    sno: 10,
    trainingId: 65163,
    domain: "Business Development",
    startDate: "06/04/2019",
    duration: 88,
    trainer: "Elayne McGilmartin",
    price: 2942,
    rating: 4.2
  },
  {
    sno: 11,
    trainingId: 65161,
    domain: "Services",
    startDate: "20/07/2019",
    duration: 54,
    trainer: "Conway Tregale",
    price: 6594,
    rating: 4.1
  },
  {
    sno: 12,
    trainingId: 65181,
    domain: "Human Resources",
    startDate: "16/05/2019",
    duration: 58,
    trainer: "Jennilee Ivashkov",
    price: 3715,
    rating: 3.6
  },
  {
    sno: 13,
    trainingId: 65171,
    domain: "Product Management",
    startDate: "16/06/2019",
    duration: 31,
    trainer: "Constancia Geertz",
    price: 8902,
    rating: 3.6
  },
  {
    sno: 14,
    trainingId: 65179,
    domain: "Legal",
    startDate: "25/02/2019",
    duration: 62,
    trainer: "Dody McGloughlin",
    price: 2457,
    rating: 4.6
  },
  {
    sno: 15,
    trainingId: 65168,
    domain: "Sales",
    startDate: "10/08/2019",
    duration: 22,
    trainer: "Kendra Tassaker",
    price: 2100,
    rating: 3.5
  },
  {
    sno: 16,
    trainingId: 65184,
    domain: "Marketing",
    startDate: "02/08/2019",
    duration: 53,
    trainer: "Haydon Teas",
    price: 7356,
    rating: 4.3
  },
  {
    sno: 17,
    trainingId: 65178,
    domain: "Services",
    startDate: "07/06/2019",
    duration: 17,
    trainer: "Krissie Vasyunin",
    price: 2091,
    rating: 3.7
  },
  {
    sno: 18,
    trainingId: 65177,
    domain: "Research and Development",
    startDate: "06/08/2019",
    duration: 29,
    trainer: "Aurel Huxster",
    price: 8745,
    rating: 2.4
  },
  {
    sno: 19,
    trainingId: 65184,
    domain: "Business Development",
    startDate: "11/05/2019",
    duration: 12,
    trainer: "Madella Garretts",
    price: 6018,
    rating: 3.2
  },
  {
    sno: 20,
    trainingId: 65160,
    domain: "Engineering",
    startDate: "16/08/2019",
    duration: 55,
    trainer: "Hyatt Capnerhurst",
    price: 9375,
    rating: 3.6
  },
  {
    sno: 21,
    trainingId: 65174,
    domain: "Legal",
    startDate: "04/07/2019",
    duration: 75,
    trainer: "Bengt Matthisson",
    price: 6947,
    rating: 3.9
  },
  {
    sno: 22,
    trainingId: 65172,
    domain: "Marketing",
    startDate: "20/06/2019",
    duration: 51,
    trainer: "Aldric Darque",
    price: 6846,
    rating: 4.3
  },
  {
    sno: 23,
    trainingId: 65181,
    domain: "Legal",
    startDate: "11/08/2019",
    duration: 86,
    trainer: "Casie Bywater",
    price: 6041,
    rating: 4.5
  },
  {
    sno: 24,
    trainingId: 65161,
    domain: "Research and Development",
    startDate: "16/06/2019",
    duration: 88,
    trainer: "Jackquelin Barber",
    price: 4976,
    rating: 4.5
  },
  {
    sno: 25,
    trainingId: 65169,
    domain: "Product Management",
    startDate: "20/08/2019",
    duration: 53,
    trainer: "Lyn Whate",
    price: 2330,
    rating: 2.6
  },
  {
    sno: 26,
    trainingId: 65164,
    domain: "Training",
    startDate: "07/08/2019",
    duration: 65,
    trainer: "Tuckie Ciobutaru",
    price: 1390,
    rating: 2.8
  },
  {
    sno: 27,
    trainingId: 65190,
    domain: "Human Resources",
    startDate: "19/03/2019",
    duration: 56,
    trainer: "Helyn Dike",
    price: 2451,
    rating: 4.7
  },
  {
    sno: 28,
    trainingId: 65161,
    domain: "Engineering",
    startDate: "27/06/2019",
    duration: 84,
    trainer: "Sophronia Norvill",
    price: 6518,
    rating: 3.2
  },
  {
    sno: 29,
    trainingId: 65161,
    domain: "Support",
    startDate: "15/02/2019",
    duration: 45,
    trainer: "Clementia Kapiloff",
    price: 2818,
    rating: 3.0
  },
  {
    sno: 30,
    trainingId: 65175,
    domain: "Sales",
    startDate: "20/02/2019",
    duration: 64,
    trainer: "Phaidra Sunners",
    price: 5751,
    rating: 3.0
  },
  {
    sno: 31,
    trainingId: 65178,
    domain: "Legal",
    startDate: "29/04/2019",
    duration: 33,
    trainer: "Muffin Muff",
    price: 2532,
    rating: 2.4
  },
  {
    sno: 32,
    trainingId: 65169,
    domain: "Marketing",
    startDate: "04/03/2019",
    duration: 69,
    trainer: "Con McPhate",
    price: 3987,
    rating: 3.2
  },
  {
    sno: 33,
    trainingId: 65180,
    domain: "Support",
    startDate: "08/01/2019",
    duration: 56,
    trainer: "Christine Riddle",
    price: 9594,
    rating: 4.3
  },
  {
    sno: 34,
    trainingId: 65188,
    domain: "Business Development",
    startDate: "20/08/2019",
    duration: 49,
    trainer: "Franchot Gauch",
    price: 6331,
    rating: 2.4
  },
  {
    sno: 35,
    trainingId: 65174,
    domain: "Services",
    startDate: "05/04/2019",
    duration: 17,
    trainer: "Dorey Schaffler",
    price: 8629,
    rating: 4.9
  },
  {
    sno: 36,
    trainingId: 65163,
    domain: "Support",
    startDate: "25/06/2019",
    duration: 28,
    trainer: "Zedekiah Pascow",
    price: 5302,
    rating: 4.6
  },
  {
    sno: 37,
    trainingId: 65181,
    domain: "Engineering",
    startDate: "31/05/2019",
    duration: 41,
    trainer: "Theo Moysey",
    price: 5009,
    rating: 3.7
  },
  {
    sno: 38,
    trainingId: 65177,
    domain: "Human Resources",
    startDate: "29/01/2019",
    duration: 27,
    trainer: "Elizabeth Boomes",
    price: 3457,
    rating: 3.2
  },
  {
    sno: 39,
    trainingId: 65162,
    domain: "Engineering",
    startDate: "07/07/2019",
    duration: 48,
    trainer: "Cassandry Probin",
    price: 3910,
    rating: 4.1
  },
  {
    sno: 40,
    trainingId: 65187,
    domain: "Accounting",
    startDate: "11/06/2019",
    duration: 33,
    trainer: "Opal Fibbens",
    price: 2191,
    rating: 3.7
  },
  {
    sno: 41,
    trainingId: 65178,
    domain: "Business Development",
    startDate: "14/06/2019",
    duration: 44,
    trainer: "Doralin Alenov",
    price: 4632,
    rating: 3.2
  },
  {
    sno: 42,
    trainingId: 65170,
    domain: "Sales",
    startDate: "21/02/2019",
    duration: 72,
    trainer: "Clementina Grinov",
    price: 6280,
    rating: 2.9
  },
  {
    sno: 43,
    trainingId: 65173,
    domain: "Legal",
    startDate: "23/03/2019",
    duration: 10,
    trainer: "Richard Bunkle",
    price: 7921,
    rating: 4.4
  },
  {
    sno: 44,
    trainingId: 65164,
    domain: "Engineering",
    startDate: "29/01/2019",
    duration: 88,
    trainer: "Had O'Fielly",
    price: 7572,
    rating: 2.1
  },
  {
    sno: 45,
    trainingId: 65188,
    domain: "Engineering",
    startDate: "20/02/2019",
    duration: 64,
    trainer: "Nicol Trevon",
    price: 5612,
    rating: 3.7
  },
  {
    sno: 46,
    trainingId: 65178,
    domain: "Sales",
    startDate: "28/01/2019",
    duration: 11,
    trainer: "Clarinda Lidgely",
    price: 4167,
    rating: 4.7
  },
  {
    sno: 47,
    trainingId: 65181,
    domain: "Human Resources",
    startDate: "02/08/2019",
    duration: 79,
    trainer: "Darrel Shynn",
    price: 2962,
    rating: 5.0
  },
  {
    sno: 48,
    trainingId: 65184,
    domain: "Training",
    startDate: "12/04/2019",
    duration: 20,
    trainer: "Lanni Ashborne",
    price: 1947,
    rating: 3.4
  },
  {
    sno: 49,
    trainingId: 65188,
    domain: "Engineering",
    startDate: "19/05/2019",
    duration: 89,
    trainer: "Pamelina Popley",
    price: 8616,
    rating: 3.0
  },
  {
    sno: 50,
    trainingId: 65190,
    domain: "Business Development",
    startDate: "22/08/2019",
    duration: 35,
    trainer: "Felecia Doveston",
    price: 6751,
    rating: 4.3
  }
];
