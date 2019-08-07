import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
  showEmployees() {
    return [
      {
        id: 805618,
        name: "Ayush Gupta",
        gender: "M",
        domain: "Java Full Stack"
      },
      {
        id: 805619,
        name: "Gaurav Tomar",
        gender: "F",
        domain: "Salesforce"
      },
      {
        id: 805620,
        name: "Pronita Ray",
        gender: "F",
        domain: "Insurance"
      },
      {
        id: 805621,
        name: "Ritu Sharma",
        gender: "F",
        domain: ".NET"
      },
    ];
  }
}
